"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DemoLogoutButton({ redirectTo = "/demo" }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await fetch("/api/demo-auth/logout", { method: "POST" });
    } catch {
      // best-effort — still redirect
    }
    router.push(redirectTo);
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="btn btn-ghost"
      style={{ color: "rgba(255,255,255,0.55)", borderColor: "rgba(255,255,255,0.2)" }}
    >
      {loading ? "Signing out…" : "End Demo Session"}
    </button>
  );
}
