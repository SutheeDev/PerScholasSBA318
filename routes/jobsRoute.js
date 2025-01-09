const express = require("express");
const router = express.Router();

const jobs = require("../data/jobs");

router.get("/", (req, res) => {
  res.status(200).json(jobs);
});

router.get("/:id", (req, res, next) => {
  const job = jobs.find((j) => j.job_id.toString() === req.params.id);
  if (job) {
    res.status(200).json(job);
  } else next();
});

module.exports = router;
