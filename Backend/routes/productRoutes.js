const express = require('express');
const multer = require('multer');
const Product = require('../models/Product');

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// POST /api/products — Upload product
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, description, price, category } = req.body;
    const image = req.file ? req.file.path : null;

    if (!title || !description || !price || !category || !image) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newProduct = new Product({ title, description, price, category, image });
    await newProduct.save();
    return res.status(201).json({ message: 'Product added successfully.' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong.', error: error.message });
  }
});

// GET /api/products — Fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ NEW: GET /api/products/:id — Fetch product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
