import express from "express";
import cors from "cors";
import itemsRouter from "./routes/items.js";

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/items", itemsRouter);

// Root
app.get("/", (req, res) => res.send("Backend running"));


app.get("/api/items", (req, res) => {
  res.json(items);
});

// GET single item
app.get("/api/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
