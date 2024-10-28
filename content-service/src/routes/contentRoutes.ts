import express from "express";
import {
  createContent,
  getAllContent,
  getContentById,
  updateContent,
  deleteContent,
} from "../controllers/contentController";

const router = express.Router();

router.post("/content", createContent);
router.get("/content", getAllContent);
router.get("/content/:id", getContentById);
router.put("/content/:id", updateContent);
router.delete("/content/:id", deleteContent);

export default router;
