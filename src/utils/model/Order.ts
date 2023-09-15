import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  orderDate: Date,
  shippingAddress: String,
  billingAddress: String,
  totalPrice: Number,
  orderedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  orderStatus: String,
});

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
