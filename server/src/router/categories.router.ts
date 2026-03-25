import express from "express";
import { getCategories } from "../controller/categories/get-categories";
import { addCategories } from "../controller/categories/add-categories";
import { deleteCategories } from "../controller/categories/delete-categories";
import { editCategories } from "../controller/categories/edit-categories";
import { authMiddleware } from "../middleware/auth-middleware";
import { adminMiddleware } from "../middleware/admin-middleware";

const router = express.Router();

router.get("/", getCategories);

// router.post("/", authMiddleware, adminMiddleware, addCategories);

router.post("/", addCategories);

router.delete("/:id", authMiddleware, adminMiddleware, deleteCategories);

router.put("/:id", authMiddleware, adminMiddleware, editCategories);

export default router;
