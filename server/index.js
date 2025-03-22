const express = require('express');
const cors = require('cors');
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//server file imports
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');


// --- Database Connection to mongoDB---
connectDB();

// Mount the product routes at the /api/products endpoint.
// This means that any request starting with /api/products will be handled by productRoutes.
app.use('/api/products', productRoutes);

// Example API endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: "MongoDB connection is working!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

