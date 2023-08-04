"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.goalsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const goals_1 = require("../controllers/goals");
const authMiddleware_1 = require("../middleware/authMiddleware");
exports.goalsRoutes = express_1.default.Router();
exports.goalsRoutes.route("/").get(authMiddleware_1.protect, goals_1.getGoals).post(authMiddleware_1.protect, goals_1.setGoals);
exports.goalsRoutes.route("/:id").put(authMiddleware_1.protect, goals_1.editGoals).delete(authMiddleware_1.protect, goals_1.deleteGoals);
