"use server";

import { revalidatePath } from "next/cache";

export const addFood = async (food: any) => {
  try {
    await fetch("https://express-js-initial.onrender.com/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    });
    revalidatePath("/dashboard/foods");
  } catch (error) {
    console.log(error);
  }
};
