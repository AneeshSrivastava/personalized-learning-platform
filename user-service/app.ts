import express from "express";
import userRoutes from "./routes/userRoutes";
import connectDB from "./config/db";
const port=3000
const app = express();
connectDB();
app.use(express.json());
app.use("/user", userRoutes);


app.listen(port, "0.0.0.0", () => {
  console.log(`User service listening at http://localhost:${port}`);
});

export default app;
