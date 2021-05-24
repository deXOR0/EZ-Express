const express = require("express");
const router = express.Router();
const db = require("../database/database");
const Examples = require("../models/example");

router.get("/", (req, res) => {
  res.send(`You're on example routes!`);
});

module.exports = router;
