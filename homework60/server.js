import express from "express";
import { usersRouter } from "./src/routes/users.js";
import { articlesRouter } from "./src/routes/articles.js";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Get root route");
});

app.use("/users", usersRouter);
app.use("/articles", articlesRouter);


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});