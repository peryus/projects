import { Schema, model } from "mongoose";

const movieSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
        index: true,
      },

      year: {
        type: Number,
        required: true,
      },

      genres: {
        type: [String],
      },

      plot: {
        type: String,
      },
    },
    {
      collection: "movies",
      versionKey: false,
    }
);

export const Movie = model("Movie", movieSchema);