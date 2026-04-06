"use server";
import { cookies } from "next/headers";
import { Order } from "./types";

type GetOrdersResponse = {
  orders: Order[];
};

export const getOrdersAdminNew = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const response = await fetch(
    `https://express-js-initial.onrender.com/orders/admin`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );
  const data: GetOrdersResponse = await response.json();
  return data.orders;
};
