import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.MONGO_CONNECT_STR;

export async function dbConnect() {
  try {
    await mongoose.connect(connectionString, {
      dbName: "sample_mflix",
    });

    console.log("Mongoose connection successful");
  } catch (err) {
    console.error("Mongoose connection error:", err);
    process.exit(1);
  }
}