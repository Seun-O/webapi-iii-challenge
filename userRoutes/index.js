const express = require("express");

const router = express.Router();

const db = require("../data/helpers/userDb.js");

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
    console.log(data);
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.post("/", async (req, res) => {
  const user = req.body;
  try {
    const data = await db.insert(user);
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
  const { name } = req.body;
  console.log(name);
  try {
    const data = await db.update(id, { name });
    if (!data) {
      res.status(404).json({ error: "User with that ID doesn't exists." });
    } else if (name === undefined) {
      res.status(404).json({ error: "Please enter a username" });
    } else {
      res.status(200).json({ data });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
});
module.exports = router;
