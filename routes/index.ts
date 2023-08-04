import express from "express";
import { rootRoutes } from "./root";
import { usersRoutes } from "./users";
import { goalsRoutes } from "./goals";

export const routes = express.Router();

const routesNums = {
  root: "/",
  users: "/users",
  goals: "/goals",
} as const;

routes.use(routesNums.goals, goalsRoutes);
routes.use(routesNums.users, usersRoutes);
routes.use(routesNums.root, rootRoutes);
