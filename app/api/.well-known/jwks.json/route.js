import { NextResponse } from "next/server";
import { getPublicJwks } from "@/lib/jwt";

const ONE_HOUR_SECONDS = 60 * 60;

function getAllowedOrigin() {
  const appUrl = process.env.FLUIDS_APP_URL;

  if (!appUrl) {
    return "*";
  }

  try {
    return new URL(appUrl).origin;
  } catch {
    return "*";
  }
}

export async function GET() {
  const allowedOrigin = getAllowedOrigin();

  try {
    const jwks = await getPublicJwks();

    return NextResponse.json(jwks, {
      headers: {
        "Cache-Control": `public, max-age=${ONE_HOUR_SECONDS}, s-maxage=${ONE_HOUR_SECONDS}`,
        "Access-Control-Allow-Origin": allowedOrigin,
      },
    });
  } catch (error) {
    console.error("[JWKS_ROUTE_ERROR]", error);
    return NextResponse.json(
      { error: "Unable to load JWKS." },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigin,
        },
      }
    );
  }
}