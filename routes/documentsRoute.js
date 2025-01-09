const express = require("express");
const router = express();

const documents = require("../data/documents");

router.get("/", (req, res) => {
  res.status(200).json(documents);
});

router.get("/:id", (req, res, next) => {
  const document = documents.find(
    (doc) => doc.documents_id.toString() === req.params.id
  );
  if (document) {
    res.status(200).json(document);
  } else next();
});

module.exports = router;
