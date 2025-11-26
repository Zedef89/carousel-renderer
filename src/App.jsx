import React from "react";
import Cover from "./slides/Cover";
import Problem from "./slides/Problem";
import Solution from "./slides/Solution";
import Result from "./slides/Result";
import CTA from "./slides/CTA";

const slideMap = {
  cover: Cover,
  problem: Problem,
  solution: Solution,
  result: Result,
  cta: CTA,
};

export default function App() {
  const params = new URLSearchParams(window.location.search);

  const slideIndex = Number(params.get("slide") ?? 0);
  const theme = params.get("theme") ?? "darkTech";
  const dataJSON = params.get("data") ?? "{}";

  let data;
  try {
    data = JSON.parse(dataJSON);
  } catch {
    data = { slides: [] };
  }

  const slideData = data.slides?.[slideIndex] ?? {};
  const SlideComponent =
    slideMap[slideData.type] || (() => <div>Invalid slide type</div>);

  return (
    <div
      style={{
        width: "1080px",
        height: "1350px",
        overflow: "hidden",
      }}
    >
      <SlideComponent {...slideData} theme={theme} />
    </div>
  );
}
