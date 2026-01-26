import db from "@/lib/db";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const rows = await db`
      SELECT id, name
      FROM demousers
      WHERE email = ${email}
        AND password = ${password}
      LIMIT 1
    `;

    if (rows.length === 0) {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    return Response.json(
      {
        userId: rows[0].id,
        username: rows[0].name,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
