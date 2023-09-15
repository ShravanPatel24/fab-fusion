import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  categoryName: String,
  subcategories: [String], // Array of subcategory names
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

export default mongoose.models.Category ||
  mongoose.model("Category", categorySchema);
