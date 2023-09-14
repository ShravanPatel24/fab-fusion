import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: String,
  description: String,
  price: Number,
  category: String,
  brand: String,
  size: String,
  color: String,
  images: [String], // Array of image URLs
  stockQuantity: Number,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
