"use server";

import { Category, FoodOrderItem, Order, User } from "./types";
import { cookies } from "next/headers";

type GetOrdersResponse = {
  orders: Order[];
};

export const editOrderAdmin = async (id: number, status: string) => {
  // console.log(id, status);
  // return;

  const body = {
    status,
  };
  try {
    // const options = {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //     body: JSON.stringify(body),
    //   },
    // };
    // await fetch(`http://localhost:3001/orders/${id}`, options);

    await fetch(`https://express-js-initial.onrender.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.log(error);
  }
};
