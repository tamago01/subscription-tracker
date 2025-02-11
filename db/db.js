import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error("MongoDB URI is required");
}

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB in ${NODE_ENV} mode`);
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`);
  }
};

export default connectDB;
