import React from "react";
import { themes } from "../theme";

export default function Footer({ theme = "darkTech" }) {
  const t = themes[theme];

  return (
    <div
      style={{
        position: "relative",
        width: "90%",
        marginTop: "60px",
        paddingTop: "18px",
        borderTop: `1px solid ${t.border}`,
        fontFamily: "monospace",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      {/* Glow leggerissimo */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "100px",
          background: `linear-gradient(90deg, ${t.glowStrong} 0%, transparent 60%)`,
          opacity: 0.12,
          pointerEvents: "none",
        }}
      />

      {/* Testo */}
      <div>
        <div
          style={{
            color: t.textPrimary,
            fontSize: "15px",
            fontWeight: "700",
            letterSpacing: "1px",
            marginBottom: "4px",
            opacity: 0.9,
            textTransform: "uppercase",
          }}
        >
          FULL STACK & AI AUTOMATION
        </div>

        <div
          style={{
            color: t.textSecondary,
            fontSize: "11px",
            letterSpacing: "2px",
            opacity: 0.6,
          }}
        >
          nicolamele.com
        </div>
      </div>
    </div>
  );
}
