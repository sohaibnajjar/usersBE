"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGoals = exports.editGoals = exports.setGoals = exports.getGoals = void 0;
const goalsModel_1 = __importDefault(require("../model/goalsModel"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const usersModel_1 = __importDefault(require("../model/usersModel"));
const Goal = goalsModel_1.default;
const User = usersModel_1.default;
// @desc    get goals
// @route   GET /goals
// @access   Private
exports.getGoals = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const goals = yield Goal.find({ user: req.body.authUser.id });
    res.status(200).send(goals);
}));
// @desc    create goal
// @route   POST /goals
// @access   Private
exports.setGoals = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.goal) {
        Goal.schema;
        const createdGoal = yield Goal.create(new Goal({ goal: req.body.goal, user: req.body.authUser.id }));
        res.status(200).send(createdGoal);
    }
    else {
        res.status(400);
        throw new Error("pls add goal");
    }
}));
// @desc    edit goal
// @route   PUT /goals/:id
// @access   Private
exports.editGoals = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const goal = yield Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error("Error Cant Update");
    }
    if (!req.body.goal) {
        res.status(400);
        throw new Error("you must add goal");
    }
    const user = User.findById(req.body.authUser.id);
    if (!user) {
        res.status(401);
        throw new Error("user not found");
    }
    if (goal.user.toString() !== user.id) {
        res.status(401);
        throw new Error("user not Auth");
    }
    const updatedItem = yield Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).send(updatedItem);
}));
// @desc    delete goal
// @route   DELETE /goals/:id
// @access   Private
exports.deleteGoals = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const goal = yield Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error("Goal not found");
    }
    const user = User.findById(req.body.authUser.id);
    if (!user) {
        res.status(401);
        throw new Error("user not found");
    }
    if (goal.user.toString() !== req.body.authUser.id) {
        res.status(401);
        throw new Error("user not Auth");
    }
    yield Goal.findByIdAndRemove(req.params.id);
    res.send(`delete goal with id ${req.params.id}`);
}));
