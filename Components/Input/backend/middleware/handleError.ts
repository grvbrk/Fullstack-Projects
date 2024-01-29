import type { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/Error.js";

function handleError(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(404).json({ msg: "Something went wrong" });
}

export { handleError };
