import express, { Router } from "express";
import { getOrders } from "../controller/orders/get-orders";
import { addOrder } from "../controller/orders/add-orders";
import { deleteOrder } from "../controller/orders/delete-orders";
import { editOrder } from "../controller/orders/edit-orders";

const router = express.Router();

router.get("/", getOrders);
router.post("/", addOrder);
router.delete("/:id", deleteOrder);
router.put("/:id", editOrder);

export default router;
