import { prisma } from "../../../lib/prisma";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const addUser = async (req: Request, res: Response) => {
  const { email, password, age, role, phoneNumber, address } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, password: hashPassword, age, role, phoneNumber, address },
  });

  res.status(200).json({ message: "Амжилттай", user });
};
