"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const loginUser = async () => {
    const body = {
      email,
      password,
    };

    const response = await fetch("/api/user/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(body),
    });
    const data = await response.json();

    if (response.status !== 200) {
      setError(data.message);
      return;
    }
    router.push("/dashboard/foods");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col mt-50 font-display w-50">
        <Input type="text" onChange={onChangeEmail} /> email
        <Input type="text" onChange={onChangePassword} /> password
        <Button onClick={loginUser}>Login</Button>
        <Button>
          <Link href={"/register"}>Register</Link>
        </Button>
      </div>
      {error ?? <p className=" text-red-500 border">{error}</p>}
    </div>
  );
};
export default Home;
