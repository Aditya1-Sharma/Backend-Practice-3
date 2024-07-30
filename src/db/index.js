import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
  try {
    const connectioInstance = await mongoose.connect(
      `mongodb+srv://AdityaTy:0ul5CKRQEOyyr3Kx@cluster0.cia0mqu.mongodb.net/+${DB_NAME}`
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
