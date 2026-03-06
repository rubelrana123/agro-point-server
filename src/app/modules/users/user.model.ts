import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { env } from "../../config/env";
import { IUser, IUserModel } from "./user.interface";

const userSchema = new Schema<IUser, IUserModel>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    role: {
      type: String,
      enum: ["admin", "farmer", "user"],
      default: "user"
    },
    profileImage: {
      type: String
    },
    location: {
      type: String
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, env.BCRYPT_SALT_ROUNDS);
});

userSchema.methods.comparePassword = async function (candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return this.findOne({ email }).select("+password");
};

const User = model<IUser, IUserModel>("User", userSchema);

export default User;
