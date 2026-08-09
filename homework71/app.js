import express from "express";
import {
  getComments,
  addComment,
  updateComment,
  deleteComment,
} from "./services/comments.js";
import {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} from "./services/movies.js";
import { connectDB } from "./db.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("MongoDB server");
});

app.get("/comments", async (req, res) => {
  res.json(await getComments());
});

app.post("/comments", async (req, res) => {
  res.json(await addComment(req.body));
});

app.put("/comments/:id", async (req, res) => {
  res.json(await updateComment(req.params.id, req.body));
});

app.delete("/comments/:id", async (req, res) => {
  res.json(await deleteComment(req.params.id));
});

app.get("/movies", async (req, res) => {
  res.json(await getMovies());
});

app.post("/movies", async (req, res) => {
  res.json(await addMovie(req.body));
});

app.put("/movies/:id", async (req, res) => {
  res.json(await updateMovie(req.params.id, req.body));
});

app.delete("/movies/:id", async (req, res) => {
  res.json(await deleteMovie(req.params.id));
});

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

startServer();