import pool from "@/lib/db";

/* GET liked recipes */
export async function GET(request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");

  if (!userId) {
    return new Response(JSON.stringify({ error: "userId is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { rows } = await pool.query(
      `
      SELECT liked_recipes
      FROM demousers
      WHERE id = $1
      LIMIT 1
      `,
      [userId]
    );

    if (rows.length === 0) {
      return new Response(JSON.stringify({ likedRecipes: [] }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ likedRecipes: rows[0].liked_recipes || [] }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Error fetching liked recipes:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

/* POST like / unlike */
export async function POST(request) {
  const { userId, recipeId, action } = await request.json();

  if (!userId || !recipeId || !action) {
    return new Response(
      JSON.stringify({ error: "userId, recipeId, and action are required" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    /* fetch current array */
    const { rows } = await pool.query(
      `
      SELECT liked_recipes
      FROM demousers
      WHERE id = $1
      LIMIT 1
      `,
      [userId]
    );

    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    let likedRecipes = rows[0].liked_recipes || [];

    if (action === "like" && !likedRecipes.includes(recipeId)) {
      likedRecipes.push(recipeId);
    }

    if (action === "unlike") {
      likedRecipes = likedRecipes.filter((id) => id !== recipeId);
    }

    /* persist update */
    await pool.query(
      `
      UPDATE demousers
      SET liked_recipes = $1
      WHERE id = $2
      `,
      [likedRecipes, userId]
    );

    return new Response(
      JSON.stringify({ success: true, likedRecipes }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Error updating liked recipes:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
