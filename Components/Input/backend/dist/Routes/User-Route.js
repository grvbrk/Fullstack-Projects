import express from "express";
import { getAllUsers } from "../controllers/User-controller.js";
const UserRouter = express.Router();
UserRouter.route("/users").get(getAllUsers);
export { UserRouter };
