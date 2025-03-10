import { Router } from "express";
import { userControllers } from "../Controllers/userControllers";

export const userRoutes = Router();

userRoutes.get("/user", userControllers.read);
