/* eslint-disable no-console */
import bcrypt from "bcrypt";
import { env } from "../config/env";
import { TRole } from "../modules/users/user.interface";
import User from "../modules/users/user.model";

export const seedAdmin = async () => {
  try {
    const isAdminExist = await User.findOne({ email: env.ADMIN_EMAIL });

    if (isAdminExist) {
      console.log("Admin Already Exists!");
      return;
    }

    console.log("Trying to create Admin...");
        const hashedPassword = await bcrypt.hash(env.ADMIN_PASSWORD, Number(env.BCRYPT_SALT_ROUNDS))

    const payload = {
      name: env.ADMIN_NAME,
      role: "admin" as TRole,
      email: env.ADMIN_EMAIL,
      password: hashedPassword,
      isVerified: true
    };

    const admin = await User.create(payload);

    console.log("Admin Created Successfully! \n");
    console.log(admin);
  } catch (error) {
    console.log(error);
  }
};
