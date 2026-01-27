import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    return NextResponse.json(
      { error: "No user ID in cookie" },
      { status: 401 }
    );
  }

  const recipes = await db`
    SELECT *
    FROM recipes
    WHERE author = ${userId}
    ORDER BY title ASC
  `;

  return NextResponse.json({ recipes });
}