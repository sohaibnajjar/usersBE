import usersModel from "../model/usersModel";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

const User = usersModel;

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token

      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;

      //   Get usr from the token.

      req.body.authUser = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, no token");
  }
});
