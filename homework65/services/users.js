import { connectDB } from "../db.js";

export async function getUsers() {
  const db = await connectDB();

  return db
      .collection("comments")
      .find({})
      .limit(10)
      .toArray();
}