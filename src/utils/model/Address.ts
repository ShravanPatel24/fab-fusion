// Import necessary modules from mongoose
import mongoose, { Schema } from "mongoose";

// Define the structure of your address data
export type AddressData = {
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    pin: string;
  };
  billingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    pin: string;
  };
};

// Create a new schema based on the AddressData interface
const addressSchema = new Schema<AddressData>({
  shippingAddress: {
    name: String,
    street: String,
    city: String,
    state: String,
    pin: String,
  },
  billingAddress: {
    name: String,
    street: String,
    city: String,
    state: String,
    pin: String,
  },
});

if (mongoose.models.Address) {
  delete mongoose.models.Address;
}

// Define and export the Address model based on the schema
const AddressModel = mongoose.model<AddressData>("Address", addressSchema);

export default AddressModel;
