import React from "react";
import SlideWrapper from "../components/SlideWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Database, Cpu, Zap } from "lucide-react";
import { themes } from "../theme";

const iconMap = { database: Database, cpu: Cpu, zap: Zap };

export default function Solution({
  items = [],
  title = "LA SOLUZIONE",
  step = "SOLUTION_PATCH",
  theme,
}) {
  const t = themes[theme];

  return (
    <SlideWrapper theme={theme}>
      <Header step={step} theme={theme} />

      <div style={{ flex: 1, paddingLeft: "20px" }}>
        {/* Badge */}
        <div
          style={{
            background: t.accent,
            color: "#fff",
            fontFamily: "monospace",
            padding: "14px 24px",
            display: "inline-block",
            borderRadius: "4px",
            fontSize: "24px",
            marginBottom: "40px",
            boxShadow: `0 0 20px ${t.glowStrong}`,
          }}
        >
          {title}
        </div>

        {/* Timeline container */}
        <div style={{ position: "relative", marginTop: "20px" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "8px",
              width: "3px",
              background: t.border,
            }}
          />

          {/* Items */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "60px",
              marginLeft: "40px",
            }}
          >
            {items.map((item, idx) => {
              const Icon = iconMap[item.icon] || Cpu;
              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      border: `3px solid ${t.accent}`,
                      borderRadius: "50%",
                      background: t.background,
                    }}
                  />

                  {/* Panel */}
                  <div
                    style={{
                      background: "rgba(0,0,0,0.3)",
                      border: `1px solid ${t.border}`,
                      padding: "35px",
                      borderRadius: "30px",
                      width: "80%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        marginBottom: "12px",
                      }}
                    >
                      <Icon color={t.accent} size={36} />
                      <h3 style={{ fontSize: "32px", fontWeight: 700 }}>
                        {item.title}
                      </h3>
                    </div>

                    <p
                      style={{
                        fontSize: "26px",
                        color: t.textSecondary,
                        marginLeft: "52px",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
