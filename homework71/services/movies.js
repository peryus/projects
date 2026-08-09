import { Movie } from "../models/Movie.js";

export async function getMovies() {
  return await Movie.find({}).limit(10).lean();
}

export async function addMovie(data) {
  const movie = new Movie(data);
  return await movie.save();
}

export async function updateMovie(id, data) {
  return await Movie.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
}

export async function deleteMovie(id) {
  return await Movie.findByIdAndDelete(id);
}