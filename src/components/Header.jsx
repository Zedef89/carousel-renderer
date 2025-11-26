import React from "react";
import { Terminal } from "lucide-react";
import { themes } from "../theme";

export default function Header({ step, title, theme = "darkTech" }) {
  const t = themes[theme];

  return (
    <div
      style={{
        position: "relative",
        width: "90%",
        paddingBottom: "22px",
        marginBottom: "32px",
        borderBottom: `1px solid ${t.border}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "monospace",
      }}
    >
      {/* Glow leggerissimo */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "120px",
          background: `linear-gradient(90deg, ${t.glowStrong} 0%, transparent 100%)`,
          opacity: 0.18,
          pointerEvents: "none",
        }}
      />

      {/* Sinistra: SYSTEM.IO */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "14px",
          color: t.textSecondary,
          letterSpacing: "1.5px",
        }}
      >
        <Terminal size={16} color={t.accent} />
        <span>
          SYSTEM.IO <span style={{ opacity: 0.6 }}>&gt;</span> {step}
        </span>
      </div>

      {/* Separatoro piccolo */}
      <div
        style={{
          width: "6px",
          height: "6px",
          background: t.accent,
          borderRadius: "50%",
          opacity: 0.5,
        }}
      />

      {/* Destra: titolo */}
      {title && (
        <div
          style={{
            fontSize: "13px",
            color: t.textSecondary,
            letterSpacing: "1px",
            opacity: 0.8,
            textTransform: "uppercase",
          }}
        >
          {title}
        </div>
      )}
    </div>
  );
}
