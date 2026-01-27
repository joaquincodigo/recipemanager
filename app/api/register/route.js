import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req) {
  try {
    const { email, password, name, lastname } = await req.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    await db.query(
      `
      INSERT INTO demousers (
        email,
        password,
        name,
        last_name,
        avatar_url,
        liked_recipes,
        uploaded_recipes
      ) VALUES ($1,$2,$3,$4,$5,$6,$7)
      `,
      [
        email,
        password,
        name,
        lastname || "",
        "",
        [],
        [],
      ]
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
