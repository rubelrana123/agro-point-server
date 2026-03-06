import mongoose from "mongoose";
import { env } from "./env";

const connectDB = async () => {
  await mongoose.connect(env.DATABASE_URL);
};

export default connectDB;
