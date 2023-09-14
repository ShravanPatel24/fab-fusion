import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Mongo Connection Successful");
  } catch (error) {
    throw new Error("Error in connecting to mongodb");
  }
};

export default connect;
