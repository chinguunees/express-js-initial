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

export const getOrdersAdmin = async (req: Request, res: Response) => {
  const { authorization } = req.headers;

  const accessToken = authorization?.split(" ")[1];

  if (!accessToken) return res.send("no");

  const secretToken = process.env.CHINGUUNII_NUUTS!;

  try {
    const decoded = jwt.verify(accessToken, secretToken) as Token;

    if (decoded.data.role !== "ADMIN") {
      res.status(400).json({ message: "invalid credetials" });
    }

    const orders = await prisma.foodOrder.findMany();
    res.status(200).json({ message: "Ok", orders });
  } catch (error) {
    res.send(error);
  }
};
