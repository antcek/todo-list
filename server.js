import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === "production";

let vite;

// Serve static files from dist in production
if (isProduction) {
  app.use(express.static(path.join(__dirname, "dist")));
} else {
  // Development mode - use Vite
  const { createServer: createViteServer } = await import("vite");
  vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);
}

// Handle all routes
app.get("*", async (req, res) => {
  try {
    let template;

    if (isProduction) {
      template = fs.readFileSync(path.join(__dirname, "dist", "index.html"), "utf-8");
      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } else {
      // In development, transform the template with Vite
      template = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8");
      template = await vite.transformIndexHtml(req.url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    }
  } catch (e) {
    const error = e;
    console.error(error);
    res.status(500).end(error.stack);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
