import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";
export const addCategories = async (req: Request, res: Response) => {
  const { name } = req.body;
  const category = await prisma.foodCategory.create({
    data: { name },
  });

  res.status(200).json({ message: "Амжилттай", category });
};
