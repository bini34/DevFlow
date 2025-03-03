import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connecttoDB = async () => {
    mongoose.set('strictQuery', true);
    if(!process.env.NEXT_PUBLIC_MONGODB_URI){
        return console.log("Mongo URI not found");
    }
    if(isConnected){
        return console.log("Mongo is already connected");
    }
    try{
        const mongoUri = process.env.NEXT_PUBLIC_MONGODB_URI;
        if (!mongoUri) {
            throw new Error("Mongo URI is not defined");
        }
        await mongoose.connect(mongoUri, {
            dbName: 'DevFlow',
        });
        isConnected = true;
        console.log("Mongo connected");

    }catch(e){
        console.log('MONGODB CONNECTION FAILED', e);
    }
}