import { prisma } from "../../../lib/prisma";
import { Request, Response } from "express";

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findFirst({
    where: { id: Number(id) },
  });

  res.status(200).json({ message: "Ok", user });
};
