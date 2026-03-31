import { cookies } from "next/headers";

export type SignInResponse = {
  accessToken: string;
};

export async function POST(request: Request) {
  const body = await request.json();
  const cookieStore = await cookies();
  const response = await fetch("http://localhost:3001/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = (await response.json()) as SignInResponse;

  cookieStore.set("token:", data.accessToken);

  console.log("token shu", data.accessToken);

  //   console.log("token shu", data.accesstoken);

  return new Response("ok");
}
