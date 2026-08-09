import { Comment } from "../models/Comments.js";

export async function getUsers() {
  return await Comment.find({}).limit(10).lean();
}