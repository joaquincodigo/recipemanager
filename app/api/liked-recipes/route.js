import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json(
      { error: "userId is required" },
      { status: 400 }
    );
  }

  try {
    // 1. Get liked recipe IDs
    const userResult = await db.query(
      `SELECT liked_recipes FROM demousers WHERE id = $1`,
      [userId]
    );

    if (userResult.rowCount === 0) {
      return NextResponse.json(
        { likedRecipes: [] },
        { status: 200 }
      );
    }

    const likedRecipeIds = userResult.rows[0].liked_recipes || [];

    if (likedRecipeIds.length === 0) {
      return NextResponse.json(
        { likedRecipes: [] },
        { status: 200 }
      );
    }

    // 2. Fetch recipes
    const recipesResult = await db.query(
      `
      SELECT id, title, image, description, preparation_time, category
      FROM recipes
      WHERE id = ANY($1::int[])
      `,
      [likedRecipeIds]
    );

    return NextResponse.json(
      { likedRecipes: recipesResult.rows },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching liked recipes:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
