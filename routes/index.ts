import express from "express";
import { rootRoutes } from "./root";
import { usersRoutes } from "./users";

export const routes = express.Router();

const routesNums = {
  root: "/",
  users: "/users",
} as const;

routes.use(routesNums.users, usersRoutes);
routes.use(routesNums.root, rootRoutes);
