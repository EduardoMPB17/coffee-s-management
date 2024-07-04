// backend/models/product.model.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  quantity: Number,
  price: Number,
  category: String
});

const Product = mongoose.model('Product', productSchema);

export default Product;
