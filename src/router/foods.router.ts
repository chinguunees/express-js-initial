import express from "express";
import { getFoods } from "../controller/foods/get-foods";
import { addFoods } from "../controller/foods/add-foods";
import { deleteFoods } from "../controller/foods/delete-foods";
import { editFoods } from "../controller/foods/edit-foods";

const router = express.Router();

router.get("/", getFoods);

router.post("/", addFoods);

router.delete("/:id", deleteFoods);

router.put("/:id", editFoods);

export default router;
