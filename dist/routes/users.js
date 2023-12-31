"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/users");
const authMiddleware_1 = require("../middleware/authMiddleware");
exports.usersRoutes = express_1.default.Router();
exports.usersRoutes.route("/").get(authMiddleware_1.protect, users_1.getME).post(users_1.registerUser);
exports.usersRoutes.route("/login").post(users_1.loginUser);
// usersRoutes.route("/:id").put(editUsers).delete(deleteUsers);
