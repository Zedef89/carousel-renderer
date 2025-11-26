import puppeteer from "puppeteer";

// === JSON COMPLETO ===
// Puoi modificare tutto e viene renderizzato automaticamente
const data = {
  slides: [
    {
      type: "cover",
      label: "ARCHITECTURE_V.1.0",
      title: "Scalare il tuo Business con l'AI",
      highlightWord: "Business",
      subtitle: "Come trasformare processi manuali in flussi automatizzati",
      website: "🌐 NICOLAMELE.COM",
      devName: "FULLSTACK DEVELOPER",
    },
    {
      type: "problem",
      label: "ERROR_LOG // ANALISI",
      tag: "IL PROBLEMA",
      title: "Il tuo team sta perdendo tempo prezioso?",
      bullets: [
        {
          title: "Task Ripetitivi",
          desc: "Ore spese su Excel e copia-incolla manuale.",
        },
        {
          title: "Dati Dispersi",
          desc: "Informazioni su 5 software diversi.",
        },
        {
          title: "Collo di Bottiglia",
          desc: "La crescita si ferma per mancanza di risorse.",
        },
      ],
    },
    {
      type: "solution",
      label: "SOLUTION_PATCH // ARCHITETTURA",
      items: [
        {
          icon: "database",
          title: "Centralizzazione",
          desc: "Unifica i dati in un'unica fonte di verità automatizzata.",
        },
        {
          icon: "cpu",
          title: "AI Processing",
          desc: "Agenti AI che elaborano richieste ed email 24/7.",
        },
        {
          icon: "zap",
          title: "Execution",
          desc: "Trigger automatici che eseguono task senza input umano.",
        },
      ],
    },
    {
      type: "result",
      label: "BENCHMARK // KPI",
      kpi: { value: "-40", suffix: "%", label: "COSTI OPERATIVI" },
      stats: [
        { value: "20h", label: "RISPARMIATE / SETTIMANA" },
        { value: "0", label: "ERRORI UMANI" },
      ],
      quote:
        "L'efficienza non è lavorare di più, ma progettare sistemi che lavorano per te.",
    },
    {
      type: "cta",
      title: "Pronto ad automatizzare?",
      subtitle: "Prenota una consulenza gratuita",
      contacts: [
        { label: "WEB", value: "www.nicolamele.com" },
        { label: "EMAIL", value: "mele.nicola@email.com" },
      ],
    },
  ],
};

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: { width: 1080, height: 1350 },
    args: ["--no-sandbox"],
  });

  const page = await browser.newPage();

  // Nitidezza altissima
  await page.setViewport({
    width: 1080,
    height: 1350,
    deviceScaleFactor: 2,
  });

  for (let i = 0; i < data.slides.length; i++) {
    const url = `http://localhost:5173/?theme=darkTech&slide=${i}&data=${encodeURIComponent(
      JSON.stringify(data)
    )}`;

    console.log(`➡ Rendering slide ${i}: ${url}`);

    await page.goto(url, { waitUntil: "networkidle0" });

    const fileName = `slide_${i}.png`;
    await page.screenshot({
      path: fileName,
      type: "png",
      omitBackground: false,
    });

    console.log(`🎉 Salvato: ${fileName}`);
  }

  await browser.close();
  console.log("🚀 Tutte le slide generate!");
})();
