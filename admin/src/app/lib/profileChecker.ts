"use server";
import { cookies } from "next/headers";

type dataType = {
  user: {
    email: string;
    age: number;
    id: number;
  };
};

const ProfileChecker = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const response = await fetch(
    "https://express-js-initial.onrender.com/users/auth/me",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    },
  );
  const data: dataType = await response.json();
};

export default ProfileChecker;
