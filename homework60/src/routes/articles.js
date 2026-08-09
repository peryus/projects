import express from "express";

import {
  getArticles,
  postArticles,
  getArticleById,
  putArticleById,
  deleteArticleById,
} from "../controllers/articlesController.js";

export const articlesRouter = express.Router();

articlesRouter.get("/", getArticles);
articlesRouter.post("/", postArticles);

articlesRouter.get("/:articleId", getArticleById);
articlesRouter.put("/:articleId", putArticleById);
articlesRouter.delete("/:articleId", deleteArticleById);