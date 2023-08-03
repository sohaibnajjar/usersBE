import { RequestHandler, Request } from "express";
import usersModel from "../model/usersModel";

const User = usersModel;
// @desc    get users
// @route   GET /users
// @access   Private
export const getUsers: RequestHandler = async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
};
// @desc    create user
// @route   POST /users
// @access   Private
export const setUsers: RequestHandler = async (
  req: Request<{}, {}, any>,
  res
) => {
  if (req.body.text) {
    User.schema;
    const createdUser = await User.create(new User({ text: req.body.text }));
    res.status(200).send(createdUser);
  } else {
    res.status(400);
    throw new Error("pls add name prop to it");
  }
};

// @desc    edit user
// @route   PUT /users/:id
// @access   Private
export const editUsers: RequestHandler = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("Error Cant Update");
  }

  if (!req.body.text) {
    res.status(400);
    throw new Error("you must add text");
  }

  const updatedItem = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).send(updatedItem);
};

// @desc    delete user
// @route   DELETE /users/:id
// @access   Private
export const deleteUsers: RequestHandler = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(400);
      throw new Error("Error Cant Update");
    }
    await User.findByIdAndRemove(req.params.id);
    res.send(`delete user ${req.params.id}`);
  } catch (error) {
    res.status(400);
    throw new Error("dose not exist");
  }
};
