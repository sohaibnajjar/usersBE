"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRoutes = void 0;
const express_1 = __importDefault(require("express"));
exports.homeRoutes = express_1.default.Router();
exports.homeRoutes.get("/", function (req, res) {
    res.send("get items");
});
exports.homeRoutes.post("/", function (req, res) {
    res.send("create item");
});
exports.homeRoutes.put("/:id", function (req, res) {
    res.send(`edit item ${req.params.id}`);
});
exports.homeRoutes.delete("/:id", function (req, res) {
    res.send(`delete item ${req.params.id}`);
});
