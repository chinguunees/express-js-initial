import express from "express";
import { getUsers } from "../controller/users/get-users";
import { getUserById } from "../controller/users/get-user-by-id";
import { addUser } from "../controller/users/add-user";
import { deleteUser } from "../controller/users/delete-user";
import { editUser } from "../controller/users/edit-user";
import { loginUser } from "../controller/users/login";
import { authMiddleware } from "../middleware/auth-middleware";
import { adminMiddleware } from "../middleware/admin-middleware";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);

router.post("/", addUser);
router.delete("/:id", authMiddleware, adminMiddleware, deleteUser);

router.put("/:id", authMiddleware, adminMiddleware, editUser);

router.post("/login", loginUser);

export default router;
