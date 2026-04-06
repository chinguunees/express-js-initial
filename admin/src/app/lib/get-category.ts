"use server";

import { cookies } from "next/headers";
import { Category } from "./types";

type GetCategoryResponse = {
  category: Category[];
};

export const getCategoryNew = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const response = await fetch(
    `https://express-js-initial.onrender.com/category`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );
  const data: GetCategoryResponse = await response.json();
  return data.category;
};
