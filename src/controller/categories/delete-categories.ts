import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";
export const deleteCategories = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await prisma.foodCategory.delete({
    where: { id: Number(id) },
  });
  res.status(200).json({ message: "OK", category });
};
