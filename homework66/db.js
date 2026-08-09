import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.MONGO_CONNECT_STR;

const dbClient = new MongoClient(connectionString);

export let db;

export async function dbConnect() {
  await dbClient.connect();

  db = dbClient.db("sample_mflix");

  console.log("Connection successful");
}