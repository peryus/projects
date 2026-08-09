import express from "express";

const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: "Anna", email: "anna@example.com" },
  { id: 2, name: "Ivan", email: "ivan@example.com" },
  { id: 3, name: "Olga", email: "olga@example.com" },
];

const articles = [
  { id: 1, title: "Node.js Basics", content: "Introduction to Node.js" },
  { id: 2, title: "Express.js", content: "Introduction to Express.js" },
  { id: 3, title: "Template Engines", content: "PUG and EJS" },
];

app.get("/users", (req, res) => {
  res.render("users.pug", { users });
});

app.get("/users/:userId", (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});