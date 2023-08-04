import express from "express";
import { getItems, setItem, editItem, deleteItem } from "../controllers/root";

export const rootRoutes = express.Router();

rootRoutes.route("/").get(getItems).post(setItem);
rootRoutes.route("/:id").put(editItem).delete(deleteItem);
