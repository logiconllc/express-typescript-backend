import express from "express";
import UserController from "../controllers/user.controller";

const userRoutes = express.Router();

const userController = new UserController();

userRoutes.get("/list", userController.getAllUsers);

export default userRoutes;