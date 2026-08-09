import express from "express";
import { auth } from "../middlewares/auth.js";
import {
  getProfile,
  updateProfile,
} from "../controllers/profileController.js";
import { validateUser } from "../middlewares/validateUser.js";

export const profileRouter = express.Router();

profileRouter.get("/", auth, getProfile);
profileRouter.put("/", auth, validateUser, updateProfile);