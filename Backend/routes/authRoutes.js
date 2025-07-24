// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController"); // ✅ path to your controller

// Signup Route
router.post("/signup", authController.signup);

// Login Route
router.post("/login", authController.login);

module.exports = router;
