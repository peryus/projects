import { Comment } from "../models/Comments.js";
import { Movie } from "../models/Movie.js";

export async function getComments() {
  return await Comment.find({})
      .populate("movie_id", "title year genres")
      .limit(10)
      .lean();
}

export async function addComment(data) {
  const comment = new Comment(data);
  return await comment.save();
}

export async function updateComment(id, data) {
  return await Comment.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
}

export async function deleteComment(id) {
  return await Comment.findByIdAndDelete(id);
}
