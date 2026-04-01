import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0a0b0f 0%, #0d1117 50%, #0a0f1a 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(59,130,246,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(59,130,246,0.15)",
            border: "1px solid rgba(59,130,246,0.3)",
            borderRadius: "100px",
            padding: "8px 20px",
            marginBottom: "24px",
          }}
        >
          <span style={{ fontSize: "16px", color: "#60a5fa", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            ⚡ New for 2026 — Lifetime Access
          </span>
        </div>

        {/* Brain emoji */}
        <div style={{ fontSize: "72px", marginBottom: "16px" }}>🧠</div>

        {/* Headline */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 900,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: "900px",
            marginBottom: "20px",
          }}
        >
          The Ultimate 2026{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6, #10b981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Notion Second Brain
          </span>
        </div>

        {/* Subheadline */}
        <div
          style={{
            fontSize: "22px",
            color: "#9ca3af",
            textAlign: "center",
            maxWidth: "700px",
            marginBottom: "40px",
            lineHeight: 1.5,
          }}
        >
          12 pre-built dashboards · 50+ templates · GTD system
          <br />
          Pre-loaded with sample data · Built-in how-to guides
        </div>

        {/* Dashboard cards row */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "40px" }}>
          {[
            { icon: "✅", label: "GTD Tasks", color: "#3b82f6" },
            { icon: "🎯", label: "Goals & OKRs", color: "#10b981" },
            { icon: "🚀", label: "Projects", color: "#3b82f6" },
            { icon: "💪", label: "Habits", color: "#10b981" },
            { icon: "💰", label: "Finance", color: "#3b82f6" },
            { icon: "📚", label: "Knowledge", color: "#10b981" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255,255,255,0.06)",
                border: `1px solid ${item.color}40`,
                borderRadius: "12px",
                padding: "10px 16px",
              }}
            >
              <span style={{ fontSize: "18px" }}>{item.icon}</span>
              <span style={{ fontSize: "14px", color: "#e5e7eb", fontWeight: 600 }}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #3b82f6, #2563eb)",
              borderRadius: "16px",
              padding: "16px 40px",
              fontSize: "24px",
              fontWeight: 900,
              color: "#ffffff",
            }}
          >
            Get Instant Access — $49
          </div>
          <div style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.6 }}>
            One-time payment · No subscription
            <br />
            30-day money-back guarantee
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            color: "#4b5563",
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "0.05em",
          }}
        >
          secondbrainvault.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
