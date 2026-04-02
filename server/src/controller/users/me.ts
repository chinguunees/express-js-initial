import { prisma } from "../../../lib/prisma";
import { Request, Response } from "express";

export const me = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user?.userId },
      select: {
        email: true,
        phoneNumber: true,
        address: true,
        age: true,
      },
    });
    if (!user) return res.status(400).json({ message: "user not found" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "invalid" });
  }
};
