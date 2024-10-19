import express from "express";
import {
  loginUser,
  getUserProgress,
} from "../controllers/userController";

import { registerUser } from "../controllers/registerUser";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id/progress", getUserProgress);

export default router;
