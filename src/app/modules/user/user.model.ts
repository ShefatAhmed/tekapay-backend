import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
  id: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  email: { type: String, required: true },
  gender: ["male", "female"],
  dateOfBirth: { type: String, required: true },
  mobileNo: { type: Number, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  image: String,
  nominee: {
    name: { type: String, required: true },
    mobileNo: { type: Number, required: true },
    address: { type: String, required: true },
    nationalId: { type: Number, required: true },
    image: String,
  },
});

export const UserModel = model<TUser>("User", userSchema);
