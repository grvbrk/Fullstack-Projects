import express from "express";
const app = express();
import "dotenv/config";
import cors from "cors";
import { UserRouter } from "./Routes/User-Route.js";
import { routeNotFound } from "./middleware/routeNotFound.js";
import { handleError } from "./middleware/handleError.js";
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/api/v1", UserRouter);
app.use(routeNotFound);
app.use(handleError);
app.listen(PORT, () => console.log("Server is running..."));
