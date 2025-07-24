const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const authRoutes = require('./routes/authRoutes');

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer storage configuration (used in routes)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  }
});
const upload = multer({ storage: storage });

// Attach Multer to app.locals (so it can be reused in routes if needed)
app.locals.upload = upload;

// Routes

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch((err) => console.error('❌ MongoDB connection error:', err));
