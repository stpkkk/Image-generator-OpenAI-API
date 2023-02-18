import mongoose from "mongoose";

//Useful then we work with search functionality
export const connectDB = (url: string) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));
};
