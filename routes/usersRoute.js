const express = require("express");
const router = express.Router();

const users = require("../data/users");
// const user = users.find((user) => user.user_id === 1);
// console.log(user);

router.get("/", (req, res) => {
  res.status(200).json(users);
});

router.get("/:id", (req, res, next) => {
  const user = users.find((user) => user.user_id.toString() === req.params.id);
  if (user) {
    res.status(200).json(user);
  } else next();
});

module.exports = router;
