const express = require("express");

const router = express.Router();

const db = require("../data//helpers/postDb.js");

router.get("/", async (req, res) => {
  try {
    const data = await db.get();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await db.getById(id);
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.post("/", async (req, res) => {
  const { text, user_id } = req.body;
  try {
    const data = await db.insert({ text, user_id });
    res.status(201).json({ data });
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await db.remove(id);
    res.status(204).json({ data });
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { title, user_id } = req.body;
  try {
    const data = await db.update(id, { title, user_id });
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;
