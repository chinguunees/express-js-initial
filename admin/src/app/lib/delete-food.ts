"use server";

import { revalidatePath } from "next/cache";

export const deleteFoods = async (food: any) => {
  try {
    await fetch(`https://express-js-initial.onrender.com/foods/${food.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    revalidatePath("/dashboard/foods");
  } catch (error) {
    console.log(error);
  }
};
