const express = require("express");
const router = express.Router();

const users = require("../data/users");

router.get("/", (req, res) => {
  res.status(200).json(users);
});

router.get("/:id", (req, res, next) => {
  const user = users.find((u) => u.user_id.toString() === req.params.id);
  if (user) {
    res.status(200).json(user);
  } else next();
});

router.post("/", (req, res) => {
  if (req.body.first_name && req.body.email) {
    if (users.find((user) => user.email === req.body.email)) {
      res.status(400).send("This email has already been in use");
    }

    const user = {
      user_id: users[users.length - 1].user_id + 1,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      createdAt: new Date().toISOString(),
    };

    users.push(user);
    res.status(201).json(user);
  } else {
    res.status(400).send("Insufficient Data");
  }
});

router.patch("/:id", (req, res) => {
  const user = users.find((u) => u.user_id.toString() === req.params.id);

  if (!user) {
    return res.status(404).send("No user with this ID!");
  }

  Object.keys(req.body).forEach((key) => {
    if (user.hasOwnProperty(key)) {
      user[key] = req.body[key];
    }
  });

  res.status(200).json(user);
});

router.delete("/:id", (req, res, next) => {
  const user = users.find((u) => u.user_id.toString() === req.params.id);
  if (user) {
    users.filter((u) => u !== user);
    res.status(200).json(user);
  } else next();
});

module.exports = router;
