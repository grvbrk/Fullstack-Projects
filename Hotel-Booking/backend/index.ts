import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./db/connect";
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  return res.json({ msg: "Success" });
});

async function start() {
  try {
    connectDB(process.env.MONGO_KEY as string);
    app.listen(PORT, () => console.log("Server is running on PORT 3001"));
  } catch (error) {
    console.log("Error connecting to mongoDB");
  }
}

start()