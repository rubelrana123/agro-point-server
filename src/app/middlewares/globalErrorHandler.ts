import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import AppError from "../errorHelpers/AppError";

const globalErrorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let statusCode = 500;
  let message = "Something went wrong";

  if (err instanceof ZodError) {
    statusCode = 400;
    message = err.issues.map((issue) => issue.message).join(", ");
  } else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (
    typeof err === "object" &&
    err !== null &&
    "name" in err &&
    err.name === "ValidationError"
  ) {
    statusCode = 400;
    message = "Validation failed";
  } else if (
    typeof err === "object" &&
    err !== null &&
    "code" in err &&
    err.code === 11000
  ) {
    statusCode = 409;
    message = "Duplicate key error";
  } else if (err instanceof Error) {
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    error: {
      details: message
    }
  });
};

export default globalErrorHandler;
