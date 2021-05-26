const express = require("express");
const router = express.Router();
const db = require("../database/database");

router.get("/", (req, res) => {
  res.json({
    message: "You're on api route!",
  });
});

module.exports = router;
