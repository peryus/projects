import express from "express";
import { auth } from "../middlewares/auth.js";
import { createOrder } from "../controllers/ordersController.js";

export const ordersRouter = express.Router();

ordersRouter.post("/", auth, createOrder);