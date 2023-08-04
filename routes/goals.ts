import express from "express";
import {
  getGoals,
  setGoals,
  editGoals,
  deleteGoals,
} from "../controllers/goals";
import { protect } from "../middleware/authMiddleware";

export const goalsRoutes = express.Router();

goalsRoutes.route("/").get(protect, getGoals).post(protect, setGoals);
goalsRoutes.route("/:id").put(protect, editGoals).delete(protect, deleteGoals);
