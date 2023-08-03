import { RequestHandler } from "express";

// @desc    get items
// @route   GET /
// @access   Private
export const getItems: RequestHandler = (req, res) => {
  res.send("get items");
};

// @desc    create item
// @route   POST /
// @access   Private
export const setItem: RequestHandler = (req, res) => {
  res.send("create item");
};

// @desc    edit item
// @route   PUT /:id
// @access   Private
export const editItem: RequestHandler = (req, res) => {
  res.send(`edit item ${req.params.id}`);
};

// @desc    delete item
// @route   DELETE /:id
// @access   Private
export const deleteItem: RequestHandler = (req, res) => {
  res.send(`delete item ${req.params.id}`);
};
