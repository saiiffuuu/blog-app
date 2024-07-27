import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://DevSocerer:saif123@cluster0.c2ytwve.mongodb.net/blog-app');
    console.log("DB Connected");
}