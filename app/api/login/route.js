import db from "@/lib/db";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const { rows } = await db.query(
      `
      SELECT id, name
      FROM demousers
      WHERE email = $1 AND password = $2
      LIMIT 1
      `,
      [email, password]
    );

    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
      });
    }

    return new Response(
      JSON.stringify({
        userId: rows[0].id,
        username: rows[0].name,
      }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
