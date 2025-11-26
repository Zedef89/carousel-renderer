import React from "react";
import SlideWrapper from "../components/SlideWrapper";

export default function Problem({
  label = "ERROR_LOG",
  title = "Il tuo team sta perdendo tempo prezioso?",
  tag = "IL PROBLEMA",
  bullets = [],
  theme,
}) {
  return (
    <SlideWrapper theme={theme}>
      <div
        style={{
          padding: "150px 60px 0 60px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            fontFamily: "monospace",
            color: "#60A5FA",
            fontSize: "22px",
            letterSpacing: "2px",
            marginBottom: "40px",
          }}
        >
          {label}
        </div>

        {/* TAG */}
        <div
          style={{
            display: "inline-block",
            background: "#111827",
            border: "1px solid #1F2937",
            padding: "14px 24px",
            borderRadius: "6px",
            fontFamily: "monospace",
            color: "white",
            fontSize: "28px",
            marginBottom: "50px",
            boxShadow: "0 0 15px rgba(0,0,0,0.4)",
          }}
        >
          {tag}
        </div>

        {/* TITLE */}
        <h1
          style={{
            fontSize: "70px",
            fontWeight: "800",
            lineHeight: "1.1",
            color: "white",
            maxWidth: "90%",
            marginBottom: "70px",
            textTransform: "none",
          }}
        >
          {title}
        </h1>

        {/* BULLETS */}
        <div style={{ position: "relative", marginLeft: "20px" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "7px",
              top: "6px",
              bottom: "0",
              width: "2px",
              background: "rgba(255,255,255,0.08)",
            }}
          />

          {bullets.map((b, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "24px",
                marginBottom: "60px",
                position: "relative",
              }}
            >
              {/* Red glowing dot */}
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: "#EF4444",
                  boxShadow: "0 0 14px rgba(239,68,68,0.8)",
                  marginTop: "8px",
                }}
              />

              <div>
                <div
                  style={{
                    color: "white",
                    fontSize: "40px",
                    fontWeight: "700",
                    marginBottom: "6px",
                  }}
                >
                  {b.title}
                </div>

                <div
                  style={{
                    color: "#9CA3AF",
                    fontSize: "32px",
                    lineHeight: "1.3",
                    maxWidth: "80%",
                  }}
                >
                  {b.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
