const express = require("express");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;
  // Do validation + save user
  return res.status(201).json({ message: "User created successfully" });
});

module.exports = router;
