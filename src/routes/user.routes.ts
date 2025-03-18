import { Router } from "express";
import { userControllers } from "../Controllers/userControllers";

export const userRoutes = Router();

userRoutes.post("/user", userControllers.create);
userRoutes.get("/user", userControllers.read);