import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export const getCategories = async (req: Request, res: Response) => {
  const category = await prisma.foodCategory.findMany({
    include: {
      foods: true,
    },
  });
  res.status(200).json({ message: "Ok", category });
};
