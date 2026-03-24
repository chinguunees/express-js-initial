import { prisma } from "../../../lib/prisma";
import { Request, Response } from "express";

export const editUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, password, age } = req.body;
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: { email, password, age },
  });
  res.status(200).json({ message: "OK", user });
};
