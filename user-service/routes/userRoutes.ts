import express from "express";
import { loginUser, getUserTopics } from "../controllers/userController";

import { registerUser } from "../controllers/registerUser";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id/topic", getUserTopics);

export default router;
