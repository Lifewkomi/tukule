const express = require("express");
const router = express.Router();
const Product = require("../models/productModel.js");

// ----- READ Operation -----
// GET /api/products
// Retrieve a list of all products from the database.
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products); // Send the product list as JSON.
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// ----- CREATE Operation -----
// POST /api/products
// Create a new product based on data sent in the request body.
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body); // Create a new product using the schema.
    const savedProduct = await newProduct.save(); // Save it to the database.
    res.status(201).json(savedProduct); // Return the saved product.
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
});

// Update an existing product by its ID.
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id, // The ID of the product to update.
      req.body, // The updated product data.
      { new: true } // Return the updated document.
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
});

// ----- DELETE Operation -----
// DELETE /api/products/:id
// Remove a product by its ID.
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Products deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
});
// router.delete('/:id', async (req, res) => {
//   try {
//     const deleted = await Product.findByIdAndDelete(req.params.id);
//     if (!deleted) {
//       return res.status(404).json({ error: 'Product not found' });
//     }
//     res.json({ message: 'Product deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete product' });
//   }
// });
module.exports = router;
