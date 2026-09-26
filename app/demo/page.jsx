import { demos } from "@/data/demos";
import DemoCard from "@/components/DemoCard";
import DemoOtpGate from "@/components/DemoOtpGate";
import { getActiveDemoSession } from "@/lib/demoSession";
import DemoLogoutButton from "@/components/DemoLogoutButton";
import { cookies } from "next/headers";

export const metadata = {
  title: "Demo Platform | Interactive Showcase",
  description: "Two ways into a real, signed-in Fluids environment with worked data: the plant operations walkthrough, and the analytics and insight workspace.",
  keywords: [
    "product demos",
    "interactive software demo",
    "live ERP demo environment",
    "industrial operations demo",
    "Pradrava demos",
  ],
  alternates: {
    canonical: "/demo",
  },
};

const DEMO_NOTICES = {
  expired: {
    tone: "info",
    text: "Your 5-minute demo session has ended. Verify again below to start a fresh demo.",
  },
  invalid_token: {
    tone: "error",
    text: "That demo link was invalid or already used. Please verify again to launch the demo.",
  },
  missing_token: {
    tone: "error",
    text: "We couldn't read your demo access. Please verify again to launch the demo.",
  },
};

export default async function DemoPage({ searchParams }) {
  const cookieStore = await cookies();
  const access = await getActiveDemoSession(cookieStore);
  const hasAccess = access.ok;

  const params = (await searchParams) || {};
  const noticeKey = params.expired ? "expired" : params.error;
  const notice = DEMO_NOTICES[noticeKey] || null;

  return (
    <section className="container page-stack">
      <div className="section-head reveal">
        <p className="eyebrow">Interactive Showcase</p>
        <h1>Demo Platform</h1>
      </div>

      {notice && (
        <div className={`demo-notice demo-notice-${notice.tone} reveal`} role="status">
          {notice.text}
        </div>
      )}

      {!hasAccess ? (
        <DemoOtpGate />
      ) : (
        <>
          <div className="card-grid reveal delay-1">
            {demos.map((d) => (
              <DemoCard key={d.slug} demo={d} />
            ))}
          </div>
          <div className="section-cta-row reveal delay-2" style={{ marginTop: "2rem" }}>
            <DemoLogoutButton />
          </div>
        </>
      )}
    </section>
  );
}