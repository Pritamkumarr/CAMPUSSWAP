const express = require('express');
const multer = require('multer');
const Product = require('../models/Product');

const router = express.Router();

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // uploads folder at root of project
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// @route   POST /api/products
// @desc    Upload a new product
// @access  Public
router.post('/', upload.single('image'), async (req, res) => {
  try {
    console.log("Body:", req.body);
    console.log("File:", req.file);

    const { title, description, price, category } = req.body;
    const image = req.file ? req.file.path : null;

    // Validate required fields
    if (!title || !description || !price || !category || !image) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newProduct = new Product({
      title,
      description,
      price,
      category,
      image,
    });

    await newProduct.save();
    return res.status(201).json({ message: 'Product added successfully.' });
  } catch (error) {
    console.log('❌ Error uploading product:', error);
    return res.status(500).json({ message: 'Something went wrong.' });
  }
});

// ✅ NEW: GET all products
// @route   GET /api/products
// @desc    Fetch all products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products' });
  }
});

module.exports = router;
