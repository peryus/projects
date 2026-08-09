import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { dbConnect, db } from "./db.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../front")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/index.html"));
});

app.get("/movies", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;

  const moviesCollection = db.collection("movies");

  const totalCount = await moviesCollection.countDocuments();

  const skip = (page - 1) * perPage;
  const limit = perPage;

  const result = await moviesCollection
      .find({})
      .sort({ title: 1 })
      .skip(skip)
      .limit(limit)
      .toArray();

  res.json({
    totalCount,
    data: result,
  });
});

app.get("/movies/stats/by-year", async (req, res) => {
  try {
    const moviesCollection = db.collection("movies");

    const stats = await moviesCollection
        .aggregate([
          {
            $group: {
              _id: "$year",
              count: { $sum: 1 },
            },
          },
          {
            $sort: {
              _id: 1,
            },
          },
        ])
        .toArray();

    res.json(stats);
  } catch (error) {
    console.error("Error getting stats by year", error);

    res.status(500).json({
      error: "Internal server error",
    });
  }
});

async function connect() {
  try {
    await dbConnect();

    app.listen(PORT, () => {
      console.log(`Server started and listening to http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error connection with Database", error);
  }
}

connect();