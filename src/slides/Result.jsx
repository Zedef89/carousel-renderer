import React from "react";
import SlideWrapper from "../components/SlideWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { themes } from "../theme";

export default function Result({ kpi = {}, stats = [], quote = "", theme }) {
  const t = themes[theme];

  return (
    <SlideWrapper theme={theme}>
      <Header step="BENCHMARK" theme={theme} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* BIG KPI */}
        <div style={{ marginBottom: "10px", position: "relative" }}>
          <h2 style={{ fontSize: "150px", fontWeight: 800 }}>
            {kpi.value}
            <span style={{ color: t.accent }}>{kpi.suffix}</span>
          </h2>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "32px",
              color: t.accent2,
            }}
          >
            {kpi.label}
          </p>
        </div>

        {/* STATS GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            width: "80%",
            marginBottom: "60px",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{ borderTop: `1px solid ${t.border}`, paddingTop: "30px" }}
            >
              <h3 style={{ fontSize: "72px", fontWeight: "800" }}>{s.value}</h3>
              <p style={{ fontFamily: "monospace", color: t.textSecondary }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* QUOTE */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: `1px solid ${t.border}`,
            padding: "32px",
            borderRadius: "8px",
            fontSize: "28px",
            maxWidth: "70%",
            fontStyle: "italic",
          }}
        >
          {quote}
        </div>
      </div>

      <Footer page="04" theme={theme} />
    </SlideWrapper>
  );
}
