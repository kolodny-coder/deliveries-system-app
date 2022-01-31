const express = require("express");
const router = express.Router();
const {
    usersList,
    createUser,
    getUser,
    deleteUser,
} = require("../controllers/userController");

router.use(express.json());

router.get("/", (req, res) => {
    usersList()
        .then((resolve) => res.send(resolve))
        .catch((err) => res.send(err.message));
});

router.post("/new", (req, res) => {
    createUser(req.body)
        .then((response) => res.send(response))
        .catch((err) => res.send(err.message));
});

router
    .route("/:id")
    .get((req, res) => {
        getUser(req.params.id)
            .then((response) => res.send(response))
            .catch((err) => res.send(err.message));
    })
    .delete((req, res) => {
        deleteUser(req.params.id)
            .then((response) => res.send(response))
            .catch((err) => res.send(err.message));
    });

module.exports = router;
