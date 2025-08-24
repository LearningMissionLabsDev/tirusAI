import express from "express";
import cors from "cors";
import contactRouter from "./contact";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api", contactRouter); // exposes POST /api/contact

const PORT = Number(process.env.API_PORT || 8787);
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});