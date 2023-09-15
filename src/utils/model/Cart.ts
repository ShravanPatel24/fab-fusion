import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  cartItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  totalPrice: Number,
  cartStatus: String,
});

export default mongoose.models.Cart ||
  mongoose.model("Cart", cartSchema);
