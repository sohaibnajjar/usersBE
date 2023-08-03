import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "pls add text"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
