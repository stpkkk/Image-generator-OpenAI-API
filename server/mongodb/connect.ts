import mongoose from "mongoose";

const connectDB = (url: string) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch(err => {
      console.error("Failed to connect with MongoDB");
      console.error(err);
    });
};

export default connectDB;
