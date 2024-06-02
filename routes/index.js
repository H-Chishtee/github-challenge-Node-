const router = require("express").Router();

let currentArray = [];

router.post("/data", (req, res) => {
  const numbers = req.body;

  if (!numbers.length) {
    throw new Error("Please Submit an array.");
  }

  if (numbers.length !== 500) {
    throw new Error("Numbers array must contain exactly 500 numbers.");
  }

  numbers.forEach((item) => {
    if (typeof item !== "number") {
      throw new Error("All items must be numbers.");
    }
  });

  currentArray = numbers;
  res.json(currentArray);
});

router.get("/data", (req, res) => {
  res.json(currentArray.sort((a, b) => a - b));
});

module.exports = router;
