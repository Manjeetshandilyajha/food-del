import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://manjeetstack:manjeetjha@cluster0.quxinlx.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}