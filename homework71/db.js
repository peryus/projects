import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
  await mongoose.connect(process.env.MONGO_CONNECT_STR, {
    dbName: "sample_mflix",
  });

  console.log("Mongoose connection successful");
}