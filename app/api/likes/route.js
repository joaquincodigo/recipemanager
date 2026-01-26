import db from "@/lib/db";

export async function GET(request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");

  if (!userId) {
    return Response.json({ error: "userId is required" }, { status: 400 });
  }

  try {
    const rows = await db`
      SELECT liked_recipes
      FROM demousers
      WHERE id = ${userId}
      LIMIT 1
    `;

    return Response.json(
      { likedRecipes: rows[0]?.liked_recipes || [] },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { userId, recipeId, action } = await request.json();

    if (!userId || !recipeId || !action) {
      return Response.json(
        { error: "userId, recipeId, and action are required" },
        { status: 400 }
      );
    }

    const rows = await db`
      SELECT liked_recipes
      FROM demousers
      WHERE id = ${userId}
      LIMIT 1
    `;

    if (rows.length === 0) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    let likedRecipes = rows[0].liked_recipes || [];

    if (action === "like" && !likedRecipes.includes(recipeId)) {
      likedRecipes = [...likedRecipes, recipeId];
    }

    if (action === "unlike") {
      likedRecipes = likedRecipes.filter((id) => id !== recipeId);
    }

    await db`
      UPDATE demousers
      SET liked_recipes = ${likedRecipes}
      WHERE id = ${userId}
    `;

    return Response.json({ success: true, likedRecipes }, { status: 200 });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
