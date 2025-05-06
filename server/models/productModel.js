const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },         // Name of the product
  description: { type: String, default: '' },       // Description of the product
  imgUrl: { type: String, default: '' },            // URL or path to the product image
  category: { type: String, required: true }, 
  price: { type: Number, required: true } // Added price field      
}, {
  timestamps: true  // Automatically create createdAt and updatedAt fields
});

module.exports = mongoose.model('Product', ProductSchema);
