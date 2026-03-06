import { Request, RequestHandler, Response } from "express";
import { AuthService } from "./auth.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const registerUser: RequestHandler = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.registerUser(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User registered successfully",
    data: result
  });
});

const loginUser: RequestHandler = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.loginUser(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Login successful",
    data: result
  });
});

const logoutUser: RequestHandler = catchAsync(async (_req: Request, res: Response) => {
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Logout successful"
  });
});

const getMyProfile: RequestHandler = catchAsync(
  async (_req: Request, res: Response) => {
    const result = await AuthService.getMyProfile(res.locals.user.userId);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Profile fetched successfully",
      data: result
    });
  }
);

export const AuthController = {
  registerUser,
  loginUser,
  logoutUser,
  getMyProfile
};
