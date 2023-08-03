"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.editItem = exports.setItem = exports.getItems = void 0;
// @desc    get items
// @route   GET /items
// @access   Private
const getItems = (req, res) => {
    res.send("get items");
};
exports.getItems = getItems;
// @desc    create item
// @route   POST /
// @access   Private
const setItem = (req, res) => {
    res.send("create item");
};
exports.setItem = setItem;
// @desc    edit item
// @route   PUT /:id
// @access   Private
const editItem = (req, res) => {
    res.send(`edit item ${req.params.id}`);
};
exports.editItem = editItem;
// @desc    delete item
// @route   DELETE /:id
// @access   Private
const deleteItem = (req, res) => {
    res.send(`delete item ${req.params.id}`);
};
exports.deleteItem = deleteItem;
