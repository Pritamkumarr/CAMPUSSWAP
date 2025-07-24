const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Signup
exports.signup = async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword)
    return res.status(400).json({ message: "Passwords do not match" });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ fullName, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', {
      expiresIn: '1d'
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        fullName: user.fullName,
        email: user.email
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
