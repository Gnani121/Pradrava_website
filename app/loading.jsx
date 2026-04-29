export default function Loading() {
  return (
    <div className="container page-stack" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            border: "3px solid rgba(255,255,255,0.1)",
            borderTop: "3px solid rgba(255,255,255,0.8)",
            borderRadius: "50%",
            animation: "spin 0.6s linear infinite",
            margin: "0 auto 1.5rem",
          }}
        />
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>Loading...</p>
      </div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
