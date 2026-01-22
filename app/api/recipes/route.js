import { sql } from "@/lib/neon";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  try {
    let rows;

    if (query) {
      rows = await sql`
        SELECT *
        FROM recipes
        WHERE title ILIKE ${"%" + query + "%"}
           OR description ILIKE ${"%" + query + "%"}
      `;
    } else {
      rows = await sql`SELECT * FROM recipes`;
    }

    return Response.json(rows);
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}
