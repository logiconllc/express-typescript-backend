import express from "express";
import authorize from "../middlewares/auth-middleware";
import AuthController from "../controllers/auth.controller";

const authRoutes = express.Router();

const authController = new AuthController();

authRoutes.post("/signup", authController.signup);
authRoutes.post("/login", authController.login);

authRoutes.get("/protected-route", authorize, authController.secret);

export default authRoutes;