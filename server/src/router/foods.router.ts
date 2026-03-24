import express from "express";
import { getFoods } from "../controller/foods/get-foods";
import { addFoods } from "../controller/foods/add-foods";
import { deleteFoods } from "../controller/foods/delete-foods";
import { editFoods } from "../controller/foods/edit-foods";
import { authMiddleware } from "../middleware/auth-middleware";
import { adminMiddleware } from "../middleware/admin-middleware";

const router = express.Router();

router.get("/", getFoods);

router.post("/", authMiddleware, adminMiddleware, addFoods);

router.delete("/:id", authMiddleware, adminMiddleware, deleteFoods);

router.put("/:id", authMiddleware, adminMiddleware, editFoods);

export default router;
