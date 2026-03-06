import { Model } from "mongoose";

export type TRole = "admin" | "farmer" | "user";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: TRole;
  profileImage?: string;
  location?: string;
  isVerified: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface IUserModel extends Model<IUser> {
  isUserExistsByEmail(email: string): Promise<IUser | null>;
}
