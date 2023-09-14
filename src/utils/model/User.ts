import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // Hashed password
  shippingAddress: String,
  billingAddress: String,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});

export const User =
  mongoose.models.userSchema || mongoose.model("user", userSchema);
