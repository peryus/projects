import express from "express";

import {getUsers, postUsers, getUserById, putUserById, deleteUserById,} from "../controllers/usersController.js";

export const usersRouter = express.Router();

usersRouter.get("/", getUsers);
usersRouter.post("/", postUsers);

usersRouter.get("/:userId", getUserById);
usersRouter.put("/:userId", putUserById);
usersRouter.delete("/:userId", deleteUserById);