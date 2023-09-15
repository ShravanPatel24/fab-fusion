import mongoose from "mongoose";

const shippingSchema = new mongoose.Schema({
  shippingMethod: String,
  shippingCost: Number,
  estimatedDeliveryTime: String,
  shippingStatus: String,
});

export default mongoose.models.Shipping ||
  mongoose.model("Shipping", shippingSchema);
