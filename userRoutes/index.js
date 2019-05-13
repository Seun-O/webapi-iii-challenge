const express = require("express");

const router = express.Router();

const db = require("../data/helpers/userDb.js");

router.get("/", (req, res) => {
  db.get()
    .then(response => {
      console.log(response);
      res.status(200).json({ data: response });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

module.exports = router;
