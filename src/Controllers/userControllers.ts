import { Request, Response, NextFunction } from "express";

export const userControllers = {
  async read(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json({ message: "user read" });
    } catch (error) {
      next(error);
    }
  },
};
