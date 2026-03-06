import { z } from "zod";

const registerValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["admin", "farmer", "user"]).optional(),
    profileImage: z.string().optional(),
    location: z.string().optional()
  })
});

const loginValidationSchema = z.object({
  body: z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(1, "Password is required")
  })
});

export const AuthValidation = {
  registerValidationSchema,
  loginValidationSchema
};
