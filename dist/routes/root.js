"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRoutes = void 0;
const express_1 = __importDefault(require("express"));
const root_1 = require("../controllers/root");
exports.rootRoutes = express_1.default.Router();
exports.rootRoutes.route("/").get(root_1.getItems).post(root_1.setItem);
exports.rootRoutes.route("/:id").put(root_1.editItem).delete(root_1.deleteItem);
