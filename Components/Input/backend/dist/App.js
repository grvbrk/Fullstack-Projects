import express from "express";
const app = express();
import "dotenv/config";
import cors from "cors";
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/", (req, res) => {
    return res.send("PAGE");
});
app.listen(3000, () => console.log("Server is running..."));
