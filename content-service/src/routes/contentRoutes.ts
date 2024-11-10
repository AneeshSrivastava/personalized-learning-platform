import express from "express";
import {
  getAllContent,
  getContentById,
  deleteContent,
} from "../controllers/contentController";

const router = express.Router();

router.get("/content", getAllContent);
router.get("/content/:id", getContentById);
router.delete("/content/:id", deleteContent);

export default router;
