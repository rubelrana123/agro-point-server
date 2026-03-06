import dotenv from "dotenv";

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT) || 5000,
  DATABASE_URL:
    process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/agropoint",
  JWT_ACCESS_SECRET:
    process.env.JWT_ACCESS_SECRET || "please_change_jwt_access_secret",
  JWT_ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN || "7d",
  BCRYPT_SALT_ROUNDS: Number(process.env.BCRYPT_SALT_ROUNDS) || 10
};
