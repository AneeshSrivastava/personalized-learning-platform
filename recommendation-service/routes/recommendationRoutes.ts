import express from "express";
import { getRecommendations } from "../controllers/recommendationController";

const router = express.Router();

router.get("/user/:id/recommendations", getRecommendations);

export default router;
