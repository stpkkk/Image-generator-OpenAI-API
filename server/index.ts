import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect";
import postRoutes from "./routes/postRoutes";
import dalleRoutes from "./routes/dalleRoutes";

dotenv.config();

// Initialize the express engine
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

//Routes
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.send("Hello from DALL-E!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL!);
    app.listen(8080, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
