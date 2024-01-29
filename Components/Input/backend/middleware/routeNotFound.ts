import { Request, Response } from "express";

function routeNotFound(req: Request, res: Response) {
  return res.send("Route Not Found");
}

export { routeNotFound };
