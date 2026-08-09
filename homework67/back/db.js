import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const connectionString = process.env.MONGO_CONNECT_STR;

const dbClient = new MongoClient(connectionString);

export let db;

export async function dbConnect() {
  await dbClient.connect();

  db = dbClient.db("sample_mflix");

  console.log("Connected to MongoDB");
}