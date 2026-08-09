import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_CONNECT_STR);

export async function connectDB() {
  await client.connect();

  return client.db("sample_mflix");
}