const express = require("express");
const router = express.Router();

const jobs = require("../data/jobs");

router.get("/", (req, res) => {
  res.status(200).json(jobs);
});

module.exports = router;
