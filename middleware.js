import { NextResponse } from "next/server";

export function middleware(req) {
  const isLoggedIn = req.cookies.get("userId")?.value;

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

	return NextResponse.next()
}


export const config = {
	matcher: ["/create-recipe", "/my-recipes", "/liked-recipes"]
}
