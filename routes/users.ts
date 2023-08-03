import express from "express";
import {
  getUsers,
  setUsers,
  editUsers,
  deleteUsers,
} from "../controllers/users";

export const usersRoutes = express.Router();

usersRoutes.get("/", getUsers);

usersRoutes.post("/", setUsers);

usersRoutes.put("/:id", editUsers);

usersRoutes.delete("/:id", deleteUsers);
