import React from "react";
import SlideWrapper from "../components/SlideWrapper";

export default function Cover({
  title,
  subtitle,
  label = "ARCHITECTURE_V.1.0",
  highlightWord = null,
  website = "🌐 NICOLAMELE.COM",
  theme,
}) {
  const devName = "FULL STACK & AI AUTOMATION";
  // Evidenzia una parola con glow
  const renderTitle = () => {
    if (!highlightWord) return title;

    const parts = title.split(new RegExp(`(${highlightWord})`, "gi"));

    return parts.map((part, idx) => {
      const isMatch = part.toLowerCase() === highlightWord.toLowerCase();

      return isMatch ? (
        <span
          key={idx}
          style={{
            color: "#3B82F6",
            textShadow: "0px 0px 35px rgba(59,130,246,0.85)",
          }}
        >
          {part}
        </span>
      ) : (
        <span key={idx}>{part}</span>
      );
    });
  };

  return (
    <SlideWrapper theme={theme}>
      {/* MAIN CONTENT */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "120px",
          paddingLeft: "60px",
          paddingRight: "60px",
          gap: "28px",
        }}
      >
        {/* Accent */}
        <div
          style={{
            width: "140px",
            height: "6px",
            background: "#3B82F6",
          }}
        />

        {/* Label */}
        <div
          style={{
            fontFamily: "monospace",
            fontSize: "26px",
            color: "#60A5FA",
            letterSpacing: "3px",
            marginTop: "10px",
          }}
        >
          {label}
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "118px",
            fontWeight: "900",
            lineHeight: "0.92",
            textTransform: "uppercase",
            marginTop: "20px",
            maxWidth: "95%",
          }}
        >
          {renderTitle()}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "46px",
            color: "#9CA3AF",
            maxWidth: "78%",
            borderLeft: "8px solid #1F2937",
            paddingLeft: "24px",
            lineHeight: "1.25",
            marginTop: "14px",
          }}
        >
          {subtitle}
        </p>

        {/* Website */}
        {website && (
          <div
            style={{
              marginTop: "50px",
              fontFamily: "monospace",
              fontSize: "32px",
              color: "#3B82F6",
              opacity: 0.85,
              textShadow: "0 0 18px rgba(59,130,246,0.6)",
              letterSpacing: "2px",
            }}
          >
            {website}
          </div>
        )}
      </div>

      {/* FIRMA */}
      {devName && (
        <div
          style={{
            position: "absolute",
            bottom: "-200px", // 🔥 dentro la slide
            left: "60px",
            fontFamily: "monospace",
          }}
        >
          {devName && (
            <div
              style={{
                color: "white",
                fontSize: "28px",
                fontWeight: "800",
                letterSpacing: "1px",
                marginBottom: "6px",
              }}
            >
              {devName}
            </div>
          )}
        </div>
      )}
    </SlideWrapper>
  );
}
