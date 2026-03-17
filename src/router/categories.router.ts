import express from "express";
import { getCategories } from "../controller/categories/get-categories";
import { addCategories } from "../controller/categories/add-categories";
import { deleteCategories } from "../controller/categories/delete-categories";
import { editCategories } from "../controller/categories/edit-categories";

const router = express.Router();

router.get("/", getCategories);

router.post("/", addCategories);

router.delete("/:id", deleteCategories);

router.put("/:id", editCategories);

export default router;
