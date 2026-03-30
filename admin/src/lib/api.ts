// import { headers } from "next/headers";

import { Category, FoodOrderItem, Order, User } from "./types";

const urlCategory = `http://localhost:3001/category`;
// const urlCategory = `https://express-js-initial.onrender.com/category/`;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    authorization: `Bearer ${process.env.TOKEN}`,
  },
};
type GetCategoryResponse = {
  category: Category[];
};

export const getCategory = async () => {
  const response = await fetch(urlCategory, options);
  const data: GetCategoryResponse = await response.json();
  return data.category;
};

type GetOrdersResponse = {
  orders: Order[];
};

export const getOrdersAdmin = async () => {
  const response = await fetch("http://localhost:3001/orders/admin", options);
  const data: GetOrdersResponse = await response.json();
  return data.orders;
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

    await fetch(`http://localhost:3001/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.log(error);
  }
};
