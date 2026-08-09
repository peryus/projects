import { Schema, model } from "mongoose";

const commentSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        index: true,
      },

      email: {
        type: String,
        required: true,
      },

      movie_id: {
        type: Schema.Types.ObjectId,
        required: true,
      },

      text: {
        type: String,
        required: true,
      },

      date: {
        type: Date,
        default: Date.now,
      },
    },
    {
      collection: "comments",
      versionKey: false,
    }
);

export const Comment = model("Comment", commentSchema);