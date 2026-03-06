import { NextFunction, Request, Response } from "express";
import AppError from "../errorHelpers/AppError";
import { env } from "../config/env";
import { TRole } from "../modules/users/user.interface";
import { verifyToken } from "../utils/jwt";

const checkAuth = (...requiredRoles: TRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new AppError(401, "Authorization token is required");
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const decoded = verifyToken(token, env.JWT_ACCESS_SECRET);

    if (requiredRoles.length && !requiredRoles.includes(decoded.role)) {
      throw new AppError(403, "Forbidden: insufficient permissions");
    }

    res.locals.user = decoded;
    next();
  };
};

export default checkAuth;
