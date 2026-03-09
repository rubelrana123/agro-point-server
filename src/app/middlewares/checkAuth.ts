import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import AppError from "../errorHelpers/AppError";
import { env } from "../config/env";
import { TRole } from "../modules/users/user.interface";
import User from "../modules/users/user.model";
import { verifyToken } from "../utils/jwt";

const checkAuth =
  (...authRoles: TRole[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
    const authorizationHeader = req.headers.authorization;
    const cookieToken = req.cookies?.accessToken as string | undefined;
    const tokenFromHeader = authorizationHeader?.startsWith("Bearer ")
      ? authorizationHeader.split(" ")[1]
      : authorizationHeader;
      const accessToken = tokenFromHeader || cookieToken;

      if (!accessToken) {
        throw new AppError(403, "No token received");
      }

      const verifiedToken = verifyToken(
        accessToken,
        env.JWT_ACCESS_SECRET
      ) as JwtPayload;

      const isUserExist = await 
      User.findOne({ email: verifiedToken.email });

      if (!isUserExist) {
        throw new AppError(400, "User does not exist");
      }

      if (!isUserExist.isVerified) {
        throw new AppError(400, "User is not verified");
      }

      if (
        authRoles.length &&
        !authRoles.includes(verifiedToken.role as TRole)
      ) {
        throw new AppError(403, "You are not permitted to view this route");
      }

      res.locals.user = verifiedToken;
      next();
    } catch (error) {
      console.log("jwt error", error);
      next(error);
    }
  };

export default checkAuth;
