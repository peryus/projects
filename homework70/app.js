import express from "express";
import { getUsers } from "./services/users.js";
import { connectDB } from "./db.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("MongoDB server");
});

app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

startServer();