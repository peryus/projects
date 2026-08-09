import express from "express";
import { getUsers } from "./services/users.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("MongoDB server");
});

app.get("/users", async (req, res) => {
  const users = await getUsers();

  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});