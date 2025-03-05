"use server";
import User from "@/database/user.model";
import { connecttoDB } from "../mongoose";
export async function getUserById(params:any) {
  try {
    connecttoDB();
    const { UserID } = params;
    const user = await User.findOne({ clearkId: UserID });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
