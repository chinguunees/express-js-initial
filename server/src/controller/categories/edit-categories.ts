import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export const editCategories = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const category = await prisma.foodCategory.update({
    where: { id: Number(id) },
    data: { name },
  });
  res.status(200).json({ message: "OK", category });
};
