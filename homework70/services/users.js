import { Comment } from "../models/Comments.js";

export async function getUsers() {
  return await Comment.find({ name: "Mercedes Tyler" }).limit(5).lean();
}

export async function findComments(query = {}, projection = {}) {
  return await Comment.find(query, projection).lean();
}

export async function addOne(data) {
  const comment = new Comment(data);
  return await comment.save();
}

export async function addMany(dataArray) {
  return await Comment.insertMany(dataArray);
}

export async function updateOne(id, updateData) {
  return await Comment.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
  );
}

export async function updateMany(filter, updateData) {
  return await Comment.updateMany(filter, { $set: updateData });
}

export async function replaceOne(id, replacement) {
  return await Comment.findOneAndReplace(
      { _id: id },
      replacement,
      { new: true }
  );
}

export async function deleteOne(id) {
  return await Comment.findByIdAndDelete(id);
}

export async function deleteMany(filter) {
  return await Comment.deleteMany(filter);
}