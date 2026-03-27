import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export const editFoods = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, foodCategoryId, image } = req.body;
  try {
    const food = await prisma.food.update({
      where: { id: Number(id) },
      data: { name, price, foodCategoryId, image },
    });

    res.status(200).json({ message: "OK", food });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
