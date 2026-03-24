import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";
import jwt from "jsonwebtoken";

type Token = {
  data: {
    userId: number;
    email: string;
    role: string;
  };
};

export const getOrders = async (req: Request, res: Response) => {
  const { authorization } = req.headers;

  const accessToken = authorization?.split(" ")[1];

  if (!accessToken) return res.send("No no nouuu");

  const secretToken = process.env.CHINGUUNII_NUUTS!;

  try {
    const decoded = jwt.verify(accessToken, secretToken) as Token;

    const orders = await prisma.foodOrder.findMany({
      where: {
        userId: decoded.data.userId,
      },
    });
    if (decoded.data.role === "ADMIN") {
      const orderAdmin = await prisma.foodOrder.findMany();
      return res.status(200).json({ message: "Admin", orderAdmin });
    }
    res.status(200).json({ message: "Ok", orders });
  } catch (error) {
    res.send(error);
  }
};
