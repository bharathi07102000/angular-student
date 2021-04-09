const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");
const user = require("../models/user");

router.post("/login", UserController.userLogin);
router.get("/login", UserController.userLogout);

module.exports = router;


