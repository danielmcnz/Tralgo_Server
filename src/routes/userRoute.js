const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.get("/user", userController.getUser);

router.post("/user/create", userController.createUser);

router.put("/user/:userId", userController.updateUser);

router.delete("/user/:userId", userController.deleteUser);

module.exports = router;
