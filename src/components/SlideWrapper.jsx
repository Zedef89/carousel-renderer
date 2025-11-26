import React from "react";
import { themes } from "../theme";

export default function SlideWrapper({ children, theme = "darkTech" }) {
  const t = themes[theme];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "30px",
        position: "relative",
        backgroundColor: t.background,
        color: t.textPrimary,
        flexDirection: "column",
      }}
    >
      {/* GRID BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${t.gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          opacity: 0.18,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* GLOW */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "60%",
          height: "40%",
          background: `radial-gradient(circle at top left, ${t.glowStrong}, transparent 70%)`,
          opacity: 0.4,
          zIndex: 1,
        }}
      />

      <div style={{ zIndex: 10, position: "relative", flexGrow: 1 }}>
        {children}
      </div>
    </div>
  );
}
