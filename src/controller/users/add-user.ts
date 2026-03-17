import { prisma } from "../../../lib/prisma";
import { Request, Response } from "express";

export const addUser = async (req: Request, res: Response) => {
  const { email, password, age, role, phoneNumber, address } = req.body;
  const user = await prisma.user.create({
    data: { email, password, age, role, phoneNumber, address },
  });

  res.status(200).json({ message: "Амжилттай", user });
};
