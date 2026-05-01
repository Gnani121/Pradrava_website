import { NextResponse } from "next/server";
import { getPublicJwks } from "@/lib/jwt";

const ONE_HOUR_SECONDS = 60 * 60;

export async function GET() {
  try {
    const jwks = await getPublicJwks();

    return NextResponse.json(jwks, {
      headers: {
        "Cache-Control": `public, max-age=${ONE_HOUR_SECONDS}, s-maxage=${ONE_HOUR_SECONDS}`,
      },
    });
  } catch (error) {
    console.error("[JWKS_ROUTE_ERROR]", error);
    return NextResponse.json(
      { error: "Unable to load JWKS." },
      { status: 500 }
    );
  }
}