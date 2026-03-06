import AppError from "../../errorHelpers/AppError";
import { env } from "../../config/env";
import { createToken } from "../../utils/jwt";
import { TJwtPayload, TLoginUserPayload, TRegisterUserPayload } from "./auth.interface";
import User from "../users/user.model";

const registerUser = async (payload: TRegisterUserPayload) => {
  const existingUser = await User.findOne({ email: payload.email });

  if (existingUser) {
    throw new AppError(409, "User already exists with this email");
  }

  const user = await User.create(payload);

  const tokenPayload: TJwtPayload = {
    userId: String(user._id),
    email: user.email,
    role: user.role
  };

  const accessToken = createToken(
    tokenPayload,
    env.JWT_ACCESS_SECRET,
    env.JWT_ACCESS_EXPIRES_IN
  );

  const userObject = user.toObject();
  const { password: _password, ...safeUser } = userObject;

  return {
    accessToken,
    user: safeUser
  };
};

const loginUser = async (payload: TLoginUserPayload) => {
  const user = await User.findOne({ email: payload.email }).select("+password");

  if (!user) {
    throw new AppError(404, "User not found");
  }

  const isPasswordMatched = await user.comparePassword(payload.password);

  if (!isPasswordMatched) {
    throw new AppError(401, "Invalid credentials");
  }

  const tokenPayload: TJwtPayload = {
    userId: String(user._id),
    email: user.email,
    role: user.role
  };

  const accessToken = createToken(
    tokenPayload,
    env.JWT_ACCESS_SECRET,
    env.JWT_ACCESS_EXPIRES_IN
  );

  const userObject = user.toObject();
  const { password: _password, ...safeUser } = userObject;

  return {
    accessToken,
    user: safeUser
  };
};

const getMyProfile = async (userId: string) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new AppError(404, "User not found");
  }

  return user;
};

export const AuthService = {
  registerUser,
  loginUser,
  getMyProfile
};
