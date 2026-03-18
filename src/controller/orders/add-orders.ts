import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export type Orderitem = {
  foodId: number;
  quantity: number;
};

export const addOrder = async (req: Request, res: Response) => {
  const { userId, orderItems }: { orderItems: Orderitem[]; userId: number } =
    req.body;
  const totalPrice = await calFoodTotalPrice(orderItems);
  try {
    const order = await prisma.foodOrder.create({
      data: {
        userId: userId,
        totalPrice: totalPrice,
        status: "PENDING",
        foodOrderItems: {
          createMany: { data: orderItems },
        },
      },
    });

    res.status(200).json({ message: "Амжилттай", order });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "aldaatai bn" });
  }
};

const calFoodTotalPrice = async (orderItems: Orderitem[]) => {
  const foodIds = orderItems.map((orderItem) => orderItem.foodId);
  const foods = await findFoodsById(foodIds);
  const foodWithQuantity = foods.map((food) => {
    const foundedOrderItem = orderItems.find(
      (orderItem) => orderItem.foodId === food.id,
    );

    return { ...food, quantity: foundedOrderItem?.quantity };
  });

  const totalPrice = foodWithQuantity.reduce((acc, curr) => {
    return acc + Number(curr.price) * Number(curr.quantity);
  }, 0);
  return totalPrice.toString();
};

const findFoodsById = async (foodIds: number[]) => {
  const foods = await prisma.food.findMany({
    where: {
      id: {
        in: foodIds,
      },
    },
  });
  return foods;
};
