import express from "express";
import cors from "cors";
import "dotenv/config";
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors())
app.use(express.json())
app.get("/", (req, res)=>{
  return res.json({msg: "Success"})
})

app.listen(PORT, () => console.log("Server is running on PORT 3001"));
