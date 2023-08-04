import { RequestHandler, Request } from "express";
import goalsModel from "../model/goalsModel";
import asyncHandler from "express-async-handler";
import usersModel from "../model/usersModel";

const Goal = goalsModel;
const User = usersModel;

// @desc    get goals
// @route   GET /goals
// @access   Private
export const getGoals: RequestHandler = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.body.authUser.id });
  res.status(200).send(goals);
});

// @desc    create goal
// @route   POST /goals
// @access   Private
export const setGoals: RequestHandler = asyncHandler(
  async (req: Request<{}, {}, any>, res) => {
    if (req.body.goal) {
      Goal.schema;
      const createdGoal = await Goal.create(
        new Goal({ goal: req.body.goal, user: req.body.authUser.id })
      );
      res.status(200).send(createdGoal);
    } else {
      res.status(400);
      throw new Error("pls add goal");
    }
  }
);

// @desc    edit goal
// @route   PUT /goals/:id
// @access   Private
export const editGoals: RequestHandler = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Error Cant Update");
  }

  if (!req.body.goal) {
    res.status(400);
    throw new Error("you must add goal");
  }
  const user = User.findById(req.body.authUser.id) as any;

  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("user not Auth");
  }

  const updatedItem = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).send(updatedItem);
});

// @desc    delete goal
// @route   DELETE /goals/:id
// @access   Private
export const deleteGoals: RequestHandler = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

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

  await Goal.findByIdAndRemove(req.params.id);
  res.send(`delete goal with id ${req.params.id}`);
});
