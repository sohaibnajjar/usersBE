import express from "express";
import { getME, loginUser, registerUser } from "../controllers/users";
import { protect } from "../middleware/authMiddleware";

export const usersRoutes = express.Router();

usersRoutes.route("/").get(protect, getME).post(registerUser);
usersRoutes.route("/login").post(loginUser);
// usersRoutes.route("/:id").put(editUsers).delete(deleteUsers);
