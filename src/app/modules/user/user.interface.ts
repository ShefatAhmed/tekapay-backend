import { Schema, model, connect } from "mongoose";
export type TNominee = {
  name: string;
  mobileNo: number;
  address: string;
  nationalId: number;
  image?: string;
};
export type TUser = {
  id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  email: string;
  gender: "male" | "female";
  dateOfBirth: string;
  mobileNo: number;
  presentAddress: string;
  permanentAddress: string;
  image?: string;
  nominee: TNominee;
  userType: "user" | "employee" | "admin";
};
