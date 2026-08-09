import express from "express";
import dotenv from "dotenv";

import { dbConnect } from "./db.js";
import * as service from "./services/users.js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.json(await service.getUsers());
});

app.post("/find", async (req, res) => {
  const { query, projection } = req.body;

  res.json(await service.findComments(query, projection));
});

app.post("/insert-one", async (req, res) => {
  res.json(await service.addOne(req.body));
});

app.post("/insert-many", async (req, res) => {
  res.json(await service.addMany(req.body));
});

app.put("/update-one/:id", async (req, res) => {
  res.json(await service.updateOne(req.params.id, req.body));
});

app.put("/update-many", async (req, res) => {
  const { filter, update } = req.body;

  res.json(await service.updateMany(filter, update));
});

app.put("/replace-one/:id", async (req, res) => {
  res.json(await service.replaceOne(req.params.id, req.body));
});

app.delete("/delete-one/:id", async (req, res) => {
  res.json(await service.deleteOne(req.params.id));
});

app.delete("/delete-many", async (req, res) => {
  res.json(await service.deleteMany(req.body));
});

async function connect() {
  try {
    await dbConnect();

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Connection error", error);
  }
}

connect();