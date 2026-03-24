import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export const getUsers = async (req: Request, res: Response) => {
  const user = await prisma.user.findMany();

  res.status(200).json({ message: "Ok", user });
};
