import { NextResponse } from "next/server";
import { getActiveDemoSession } from "@/lib/demoSession";

export async function POST(request) {
  const access = await getActiveDemoSession(request.cookies);

  const response = NextResponse.json({ ok: true });

  // Clear both demo cookies immediately
  response.cookies.set("demo_access", "", { maxAge: 0, path: "/" });
  response.cookies.set("demo_session", "", { maxAge: 0, path: "/" });

  return response;
}
