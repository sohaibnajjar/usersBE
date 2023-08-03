"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/users");
exports.usersRoutes = express_1.default.Router();
exports.usersRoutes.get("/", users_1.getUsers);
exports.usersRoutes.post("/", users_1.setUsers);
exports.usersRoutes.put("/:id", users_1.editUsers);
exports.usersRoutes.delete("/:id", users_1.deleteUsers);
