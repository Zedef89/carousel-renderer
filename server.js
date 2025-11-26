import express from "express";
import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json({ limit: "10mb" }));

// Serve il build di Vite
app.use(express.static(path.join(__dirname, "dist")));

// MAIN ENDPOINT: renderizza la slide
app.post("/render", async (req, res) => {
  try {
    const { slide = 0, theme = "darkTech", data = {} } = req.body;

    const url = `http://localhost:${
      process.env.PORT || 3000
    }/?slide=${slide}&theme=${theme}&data=${encodeURIComponent(
      JSON.stringify(data)
    )}`;

    const browser = await puppeteer.launch({
      headless: "new",
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      defaultViewport: { width: 1080, height: 1350 },
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });

    const buffer = await page.screenshot({ type: "png" });
    await browser.close();

    res.setHeader("Content-Type", "image/png");
    res.send(buffer);
  } catch (err) {
    console.error("Errore render:", err);
    res.status(500).json({ error: "Render failed" });
  }
});

// Middleware SPA per servire index.html per TUTTO (Vite SPA fix)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Renderer online su porta", PORT);
});
