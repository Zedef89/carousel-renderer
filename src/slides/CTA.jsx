import React from "react";
import SlideWrapper from "../components/SlideWrapper";
import Header from "../components/Header";
import { ArrowRight } from "lucide-react";
import { themes } from "../theme";

export default function CTA({ title, subtitle, contacts = [], theme }) {
  const t = themes[theme];

  return (
    <SlideWrapper theme={theme}>
      <Header step="DEPLOY" title="CONTATTI" theme={theme} />

      {/* --- MAIN CENTERED WRAPPER --- */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 80px",
          gap: "50px",
        }}
      >
        {/* Icon glow */}
        <div
          style={{
            background: t.accent,
            borderRadius: "50%",
            padding: "38px",
            boxShadow: `0 0 55px ${t.glowStrong}`,
          }}
        >
          <ArrowRight size={70} color="#fff" />
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "90px",
            fontWeight: "800",
            lineHeight: "1.05",
            textTransform: "uppercase",
            color: "#fff",
            maxWidth: "900px",
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "36px",
            color: t.textSecondary,
            lineHeight: "1.3",
            maxWidth: "75%",
            marginTop: "-10px",
            opacity: 0.9,
          }}
        >
          {subtitle}
        </p>

        {/* CONTACT BOXES */}
        <div
          style={{
            width: "100%",
            maxWidth: "850px",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            marginTop: "30px",
          }}
        >
          {contacts.map((c, i) => (
            <div
              key={i}
              style={{
                border: `1px solid ${t.border}`,
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(4px)",
                padding: "32px 40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "10px",
                boxShadow: `0 0 25px rgba(0,0,0,0.25)`,
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "26px",
                  color: t.textSecondary,
                  letterSpacing: "2px",
                }}
              >
                {c.label}
              </span>

              <span
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#fff",
                }}
              >
                {c.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
