const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middleware/auth');

// Add item to cart
router.post('/add', authMiddleware, cartController.addToCart);

// Get user's cart
router.get('/', authMiddleware, cartController.getCart);

// Remove item from cart
router.delete('/remove/:productId', authMiddleware, cartController.removeFromCart);

module.exports = router;
