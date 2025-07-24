const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Add item to cart
exports.addToCart = async (req, res) => {
  const userId = req.user.id;
  const { productId, quantity = 1 } = req.body;

  try {
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }
    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }
    await cart.save();
    res.status(200).json({ message: 'Item added to cart', cart });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get user's cart
exports.getCart = async (req, res) => {
  const userId = req.user.id;
  try {
    const cart = await Cart.findOne({ user: userId }).populate('items.product');
    res.status(200).json(cart || { items: [] });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
  const userId = req.user.id;
  const { productId } = req.params;
  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    cart.items = cart.items.filter(item => item.product.toString() !== productId);
    await cart.save();
    res.status(200).json({ message: 'Item removed', cart });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
