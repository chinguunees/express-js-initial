import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export const addFoods = async (req: Request, res: Response) => {
  const { name, price, foodCategoryId } = req.body;
  const foods = await prisma.food.create({
    data: { name, price, foodCategoryId },
  });

  res.status(200).json({ message: "Амжилттай", foods });
};
