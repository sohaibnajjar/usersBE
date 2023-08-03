import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (process.env.MONGO_URI) {
      const conn = await mongoose.connect(process.env.MONGO_URI);

      console.log(`connected successfully to: ${conn.connection.host}`);
    }
  } catch (error) {
    console.log("error");
    process.exit(1);
  }
};
