const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboard");

router.post("/student", dashboardController.addStudent);
router.post("/staff", dashboardController.addStaff);

module.exports = router;