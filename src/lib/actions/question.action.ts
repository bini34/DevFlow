"use server"

import { connecttoDB } from "../mongoose";

export const createQuestion = async () => {
    try{
        connecttoDB();
    }catch(error){
        console.log("Error while creating question", error);

    }
}