import db from "@/lib/db";
import { NextResponse } from "next/server";

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
    // 1) get liked recipe IDs
    const users = await db`
      SELECT liked_recipes
      FROM demousers
      WHERE id = ${userId}
      LIMIT 1
    `;

    if (users.length === 0) {
      return NextResponse.json({ likedRecipes: [] }, { status: 200 });
    }

    const likedRecipeIds = users[0].liked_recipes || [];

    if (likedRecipeIds.length === 0) {
      return NextResponse.json({ likedRecipes: [] }, { status: 200 });
    }

    // 2) fetch recipes
    const recipes = await db`
      SELECT id, title, image, description, preparation_time, category
      FROM recipes
      WHERE id = ANY(${likedRecipeIds})
    `;

    return NextResponse.json(
      { likedRecipes: recipes },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
