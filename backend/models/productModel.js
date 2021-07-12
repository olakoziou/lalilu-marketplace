const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  shopName: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  url: String,
  salePrice: Number,
  mainImageUrl: {
    type: String,
    required: false,
  },
  color: [String],
  sizes: [Number],
  category: String,
  material: [String],
  tags: [String],
});

const Product = new mongoose.model('Product', productSchema);

module.exports = Product;
