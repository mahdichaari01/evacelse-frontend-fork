import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const url = `${request.nextUrl.href}/evaluations`;
  console.log(request.headers);
  return NextResponse.redirect(url);
}
