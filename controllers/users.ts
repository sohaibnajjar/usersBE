import { RequestHandler, Request } from "express";
import usersModel from "../model/usersModel";
import jwt from "jsonwebtoken";
import bcript from "bcryptjs";
import asyncHandler from "express-async-handler";

const User = usersModel;

// @desc    register user
// @route   POST /users/register
// @access  Public
export const registerUser: RequestHandler = asyncHandler(
  async (req: Request<{}, {}, any>, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("add the fileds pls ");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("user alrady exist");
    }
    const salt = await bcript.genSalt(10);
    const hashedPassword = await bcript.hash(password, salt);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      });
    } else {
      res.status(400);
      throw new Error("invalid user data");
    }
  }
);

// @desc    Authrnticate a user
// @route   POST /users/login
// @access  Public
export const loginUser: RequestHandler = asyncHandler(
  async (req: Request<{}, {}, any>, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcript.compare(password, user.password!))) {
      res.status(200).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      });
    } else {
      res.status(400);
      throw new Error("invalid credentials");
    }
  }
);

// @desc    register user
// @route   GET /users
// @access  Private
export const getME: RequestHandler = asyncHandler(
  async (req: Request<{}, {}, any>, res) => {
    res.json(req.body.authUser);
  }
);

export const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: "30d",
  });
};
