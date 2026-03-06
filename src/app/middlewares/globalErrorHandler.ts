import { NextFunction, Request, Response } from "express";
import AppError from "../errorHelpers/AppError";

const globalErrorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const message = err instanceof Error ? err.message : "Something went wrong";

  res.status(statusCode).json({
    success: false,
    message,
    error: {
      details: message
    }
  });
};

export default globalErrorHandler;
