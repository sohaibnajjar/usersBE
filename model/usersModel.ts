import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "pls add text"],
    },
    email: {
      type: String,
      required: [true, "pls add email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "pls add text"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
