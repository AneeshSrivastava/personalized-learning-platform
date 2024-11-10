import cron from "node-cron";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import contentRoutes from "./routes/contentRoutes";
import morgan from "morgan";
import { fetchAndUpdateContent } from "./helpers/fetchAndUpdateContent";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
// app.use(morgan("dev"));

app.use("/api", contentRoutes);

app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

mongoose
  .connect(process.env.MONGO_URI as string, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.listen(PORT, () => {
  console.log(`Content service running on port ${PORT}`);
});

// Schedule the fetchAndUpdateContent function to run every 15 minutes
cron.schedule("*/15 * * * *", fetchAndUpdateContent);
// cron.schedule("*/1 * * * *", fetchAndUpdateContent);
