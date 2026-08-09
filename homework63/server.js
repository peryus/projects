import express from "express";
import users from "./users.js";
import articles from "./articles.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

const registeredUsers = [];

app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

function checkAuth(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send("Access denied");
  }

  try {
    jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch {
    res.status(401).send("Invalid token");
  }
}

app.get("/users", (req, res) => {
  const theme = req.cookies.theme || "light";

  res.render("users.pug", { users, theme });
});

app.get("/users/:userId", checkAuth, (req, res) => {
  const userId = Number(req.params.userId);
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.render("user-details.pug", { user });
});

app.get("/articles", (req, res) => {
  res.render("articles.ejs", { articles });
});

app.get("/articles/:articleId", (req, res) => {
  const articleId = Number(req.params.articleId);
  const article = articles.find((article) => article.id === articleId);

  if (!article) {
    return res.status(404).send("Article not found");
  }

  res.render("article-details.ejs", { article });
});

app.put("/theme", (req, res) => {
  const { theme } = req.body;

  res.cookie("theme", theme);
  res.send("Theme saved");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  registeredUsers.push({
    username,
    password: hashedPassword,
  });

  res.send("User registered");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = registeredUsers.find(
      (user) => user.username === username
  );

  if (!user) {
    return res.status(401).send("Invalid username or password");
  }

  const isPasswordValid = await bcrypt.compare(
      password,
      user.password
  );

  if (!isPasswordValid) {
    return res.status(401).send("Invalid username or password");
  }

  const token = jwt.sign(
      { username: user.username },
      process.env.SECRET_KEY
  );

  res.cookie("token", token, {
    httpOnly: true,
  });

  res.send("Login successful");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});