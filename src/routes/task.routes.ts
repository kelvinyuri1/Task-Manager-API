import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddlewares";
import { taskControllers } from "../Controllers/taskControllers";

export const taskRoutes = Router();

taskRoutes.post("/task", authMiddleware, taskControllers.create);
taskRoutes.get("/tasks", authMiddleware, taskControllers.read);
taskRoutes.put("/task/:id", authMiddleware, taskControllers.update);
taskRoutes.delete("/task/:id", authMiddleware, taskControllers.delete);
