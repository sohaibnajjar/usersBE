"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const root_1 = require("./root");
const users_1 = require("./users");
exports.routes = express_1.default.Router();
const routesNums = {
    root: "/",
    users: "/users",
};
exports.routes.use(routesNums.users, users_1.usersRoutes);
exports.routes.use(routesNums.root, root_1.rootRoutes);
