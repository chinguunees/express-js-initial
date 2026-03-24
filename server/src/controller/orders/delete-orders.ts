import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export const deleteOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  const orderId = Number(id);
  try {
    const order = await prisma.$transaction(async (order) => {
      await order.foodOrderItem.deleteMany({
        where: { foodOrderId: orderId },
      });
      await order.foodOrder.delete({
        where: { id: orderId },
      });
    });

    res.status(200).json({ message: "OK", order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "aldaatai bn" });
  }
};
