"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const goalSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.ObjectId,
        required: true,
        ref: "User",
    },
    goal: {
        type: String,
        required: [true, "pls add goal"],
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("Goal", goalSchema);
