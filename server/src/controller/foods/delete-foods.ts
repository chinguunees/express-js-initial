import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export const deleteFoods = async (req: Request, res: Response) => {
  const { id } = req.params;
  const foods = await prisma.food.delete({
    where: { id: Number(id) },
  });
  res.status(200).json({ message: "OK", foods });
};
