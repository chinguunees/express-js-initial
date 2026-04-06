import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export type SignInResponse = {
  accessToken: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = await request.json();
  const cookieStore = await cookies();
  const response = await fetch(
    "https://express-js-initial.onrender.com/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(body),
    },
  );
  const data = (await response.json()) as SignInResponse;

  cookieStore.set("token", data.accessToken);

  if (response.status !== 200) {
    return NextResponse.json(
      {
        message: data.message,
      },
      { status: response.status },
    );
  }

  return NextResponse.json(
    {
      message: "Successfully login",
    },
    { status: 200 },
  );
}

// export const GET = async (req: NextResponse) => {
//   return NextResponse.json(
//     {
//       message: "Successfully login",
//     },
//     { status: 200 },
//   );
// const cookieStore = await cookies();

// const token = cookieStore.get("token")?.value;

// const userData = await fetch("http://localhost:3001/users/auth/me", {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${token}`,
//     "Content-Type": "application/json",
//   },
// });

// const profile = await userData.json();
// return profile;
// };
