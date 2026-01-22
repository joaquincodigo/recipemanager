import { sql } from "@/lib/neon";

export async function GET(_req, { params }) {
  const id = (await params).id;

  try {
    const rows = await sql`
      SELECT *
      FROM recipes
      WHERE id = ${id}
      LIMIT 1
    `;

    if (rows.length === 0) {
      return new Response(
        JSON.stringify({ error: "Recipe not found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ recipe: rows[0] }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
}
