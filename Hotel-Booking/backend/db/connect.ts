import mongoose from "mongoose";

async function connectDB(url: string) {
  await mongoose.connect(url as string);
}

export {connectDB}
