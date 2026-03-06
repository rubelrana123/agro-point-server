import { TRole } from "../users/user.interface";

export type TRegisterUserPayload = {
  name: string;
  email: string;
  password: string;
  role?: TRole;
  profileImage?: string;
  location?: string;
};

export type TLoginUserPayload = {
  email: string;
  password: string;
};

export type TJwtPayload = {
  userId: string;
  email: string;
  role: TRole;
};
