import { prisma } from "../../../lib/prisma";
import { Request, Response } from "express";
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.delete({
    where: { id: Number(id) },
  });
  res.status(200).json({ message: "OK", user });
};
