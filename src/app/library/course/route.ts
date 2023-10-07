import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const url = `${request.nextUrl.protocol}//${request.nextUrl.host}/library/browse`;
  return NextResponse.redirect(url);
}
