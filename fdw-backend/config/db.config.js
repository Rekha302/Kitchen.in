import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      //mongodb link
    )
    .then(() => console.log("DB Connected"));
};
