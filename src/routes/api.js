const express = require("express");
const router = express.Router();
const exampleSchema = require("../validators/exampleSchema");
const db = require("../../database/database");

router.get("/", (req, res) => {
  res.json({
    message: "You're on api route!",
  });
});

router.post("/example", async (req, res, next) => {
  const { name, age } = req.body;
  try {
    const user = {
      name,
      age,
      createdAt: Date(),
      updatedAt: Date(),
    };
    await exampleSchema.validate(user);
    res.json({
      message: "post request success",
      user,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
