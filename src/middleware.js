import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = request.cookies.get("auth");
  const pathname = request.nextUrl.pathname;

  // protect add-item page (example)
  if (pathname.startsWith("/add-item") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
