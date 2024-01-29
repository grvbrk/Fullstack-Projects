import type { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/Error.js";

function getAllUsers(req: Request, res: Response, next: NextFunction) {
  try {
    return res.send("Success")
  } catch (error) {
    throw new CustomError("New Error", 404);
  }
}

export { getAllUsers };
