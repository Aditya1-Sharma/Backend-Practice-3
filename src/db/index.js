import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
  try {
    const connectioInstance = await mongoose.connect(
      `${process.env.MOGODB_URI}/+${DB_NAME}`
    );
    console.log(
      `\n MongoDb connected !! DB host ${connectioInstance.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
