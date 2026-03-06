import { RequestHandler } from "express";
import { APP_NAME } from "../../constants";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

export const getHealth: RequestHandler = catchAsync(async (_req, res) => {
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: `${APP_NAME} API is running`,
    data: {
      uptime: process.uptime()
    }
  });
});
