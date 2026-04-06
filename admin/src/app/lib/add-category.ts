"use server";

import { revalidatePath } from "next/cache";

export const addCategory = async (food: any) => {
  try {
    await fetch("https://express-js-initial.onrender.com/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(food),
    });
    revalidatePath("/dashboard/foods");
  } catch (error) {
    console.log(error);
  }
};
