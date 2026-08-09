import { MongoClient } from "mongodb";

const connectionString = process.env.MONGODB_URI;

const dbClient = new MongoClient(connectionString);

export let db;

export async function dbConnect() {
  await dbClient.connect();

  db = dbClient.db("sample_mflix");

  console.log("Connected to MongoDB");
}