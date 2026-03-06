import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { TJwtPayload } from "../modules/auth/auth.interface";

export const createToken = (
  payload: TJwtPayload,
  secret: Secret,
  expiresIn: string | number
) => {
  return jwt.sign(payload, secret, {
    expiresIn: expiresIn as SignOptions["expiresIn"]
  });
};

export const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, secret) as TJwtPayload;
};
