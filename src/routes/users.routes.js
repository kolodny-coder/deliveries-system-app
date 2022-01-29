const express = require("express");
const router = express.Router();
const userActions = require("../models/user");

router.use(express.json());
const user1 = new userActions();

router.get("/", (req, res) => {
  user1
    .getAllusers()
    .then((resolve) => res.send(resolve))
    .catch((err) => res.send(err.message));
});

router.post("/new", (req, res) => {
  const action = new userActions();
  action
    .createUser(req.body)
    .then((response) => res.send(response))
    .catch((err) => res.send(err.message));
});

router.get("/:id", (req, res) => {
  user1
    .getUser(req.params.id)
    .then((response) => res.send(response))
    .catch((err) => res.send(err.message));
});

router.delete("/:id", (req, res) => {
  user1
    .deleteUser(req.params.id)
    .then((response) => res.send(response))
    .catch((err) => res.send(err.message));
});

// user1.getAllusers()

module.exports = router;
