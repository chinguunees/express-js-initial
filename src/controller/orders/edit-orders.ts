import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export type Orderitem = {
  foodId: number;
  quantity: number;
};

export const editOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const order = await prisma.foodOrder.updateMany({
      where: { id: Number(id) },
      data: { status },
    });

    res.status(200).json({ message: "OK", order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
