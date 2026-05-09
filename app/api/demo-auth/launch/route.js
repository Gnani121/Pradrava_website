import { NextResponse } from "next/server";
import {
  DEMO_SESSION_DURATION_SECONDS,
  getActiveDemoSession,
} from "@/lib/demoSession";
import { signJwtToken } from "@/lib/jwt";

function localRedirect(request, path) {
  return NextResponse.redirect(new URL(path, request.url));
}

export async function GET(request) {
  try {
    const requestUrl = new URL(request.url);
    const slug = requestUrl.searchParams.get("slug") || "gas-blending";

    if (slug !== "gas-blending") {
      return localRedirect(request, `/demo/${slug}`);
    }

    const access = await getActiveDemoSession(request.cookies);
    if (!access.ok) {
      const response = localRedirect(request, "/demo");
      response.cookies.set("demo_access", "", { maxAge: 0, path: "/" });
      response.cookies.set("demo_session", "", { maxAge: 0, path: "/" });
      return response;
    }

    const fluidsAppUrl = process.env.FLUIDS_APP_URL;
    if (!fluidsAppUrl) {
      return localRedirect(request, `/demo/${slug}`);
    }

    const token = await signJwtToken(
      {
        email: access.session.email,
        role: "demo",
        jti: access.session.jti,
      },
      {
        expiresIn: `${DEMO_SESSION_DURATION_SECONDS}s`,
        subject: access.session.email,
      }
    );

    const redirectUrl = new URL("/demo-launch", fluidsAppUrl);
    redirectUrl.searchParams.set("t", token);

    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error("[DEMO_LAUNCH_ERROR]", error);
    return localRedirect(request, "/demo");
  }
}
