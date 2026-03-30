import express, { Router } from "express";
import { getOrders } from "../controller/orders/get-orders-role";
import { addOrder } from "../controller/orders/add-orders";
import { deleteOrder } from "../controller/orders/delete-orders";
import { editOrder } from "../controller/orders/edit-orders";
import { getOrdersAdmin } from "../controller/orders/get-orders-admin";
import { adminMiddleware } from "../middleware/admin-middleware";

const router = express.Router();

router.get("/", getOrders);
// router.get("/admin", adminMiddleware, getOrdersAdmin);
router.get("/admin", getOrdersAdmin);
router.post("/", addOrder);
router.delete("/:id", deleteOrder);
router.put("/:id", editOrder);

export default router;
