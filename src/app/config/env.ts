import dotenv from "dotenv";

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT) || 5000,
  DATABASE_URL:
    process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/agropoint",
  ADMIN_NAME: process.env.ADMIN_NAME || "Admin",
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || "admin@agropoint.com",
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || "admin12345",
  JWT_ACCESS_SECRET:
    process.env.JWT_ACCESS_SECRET || "replace_with_secure_secret",
  JWT_ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN || "7d",
  BCRYPT_SALT_ROUNDS: Number(process.env.BCRYPT_SALT_ROUNDS) || 10
};
 