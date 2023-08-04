import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    goal: {
      type: String,
      required: [true, "pls add goal"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Goal", goalSchema);
