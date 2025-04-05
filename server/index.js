const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

//middleware
app.use(express.json());
app.use(cors());

//server file imports
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

connectDB(); // --- Database Connection to mongoDB---

// Serve static files (images, etc.) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount the product routes at the /api/products endpoint.
// This means that any request starting with /api/products will be handled by productRoutes.
app.use('/api/products', productRoutes);
app.use('/api/upload', uploadRoutes); // Mount the upload routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

