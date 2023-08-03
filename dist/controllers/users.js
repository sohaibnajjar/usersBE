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
exports.deleteUsers = exports.editUsers = exports.setUsers = exports.getUsers = void 0;
const usersModel_1 = __importDefault(require("../model/usersModel"));
const User = usersModel_1.default;
// @desc    get users
// @route   GET /users
// @access   Private
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User.find();
    res.status(200).send(users);
});
exports.getUsers = getUsers;
// @desc    create user
// @route   POST /users
// @access   Private
const setUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.text) {
        User.schema;
        const createdUser = yield User.create(new User({ text: req.body.text }));
        res.status(200).send(createdUser);
    }
    else {
        res.status(400);
        throw new Error("pls add name prop to it");
    }
});
exports.setUsers = setUsers;
// @desc    edit user
// @route   PUT /users/:id
// @access   Private
const editUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.findById(req.params.id);
    if (!user) {
        res.status(400);
        throw new Error("Error Cant Update");
    }
    if (!req.body.text) {
        res.status(400);
        throw new Error("you must add text");
    }
    const updatedItem = yield User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).send(updatedItem);
});
exports.editUsers = editUsers;
// @desc    delete user
// @route   DELETE /users/:id
// @access   Private
const deleteUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findById(req.params.id);
        if (!user) {
            res.status(400);
            throw new Error("Error Cant Update");
        }
        yield User.findByIdAndRemove(req.params.id);
        res.send(`delete user ${req.params.id}`);
    }
    catch (error) {
        res.status(400);
        throw new Error("dose not exist");
    }
});
exports.deleteUsers = deleteUsers;
