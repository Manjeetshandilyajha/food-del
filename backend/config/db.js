import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://manjeetshandilya16_db_user:VrLDPR0F9WvU3wy1@cluster0.slifyoa.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}