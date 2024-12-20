import express from "express";
import userRoutes from "./routes/userRoutes";
import connectDB from "./database/config/db";
import cors from "cors";

const port = 3000;
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3002",
      "https://dev-en5ychwmohg0hxlc.us.auth0.com",
    ], // Allow requests only from UI origin
  })
);
connectDB();
app.use(express.json());
app.use("/user", userRoutes);

app.listen(port, "0.0.0.0", () => {
  console.log(`User service listening at http://localhost:${port}`);
});

export default app;
