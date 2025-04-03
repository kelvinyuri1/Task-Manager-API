import { Router } from "express";
import { authControllers } from "../Controllers/authControllers";

export const authRoutes = Router();

authRoutes.post("/login", authControllers.login);
authRoutes.post("/logout", authControllers.logout);