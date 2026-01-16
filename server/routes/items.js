import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();
const dataPath = path.join(process.cwd(), "server/data/items.json");

// Read all items
const readItems = () => JSON.parse(fs.readFileSync(dataPath));

// Save items
const saveItems = (items) => fs.writeFileSync(dataPath, JSON.stringify(items, null, 2));

// GET all items
router.get("/", (req, res) => {
  const items = readItems();
  res.json(items);
});

// GET item by id
router.get("/:id", (req, res) => {
  const items = readItems();
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (item) res.json(item);
  else res.status(404).json({ message: "Item not found" });
});

// POST new item
router.post("/", (req, res) => {
  const items = readItems();
  const newItem = { id: items.length + 1, ...req.body };
  items.push(newItem);
  saveItems(items);
  res.status(201).json(newItem);
});

export default router;
