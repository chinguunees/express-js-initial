"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { Profile } from "../_components/Profile";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        "Content-Type": "application/json", // Set data format
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log("teeest end", data);

    return data;
  };

  return (
    <div className="flex flex-col ml-50 font-display">
      <Input type="text" onChange={onChangeEmail} /> email
      <Input type="text" onChange={onChangePassword} /> password
      <Button onClick={loginUser}>Login</Button>
      <Button>
        <Link href={"/register"}>Register</Link>
      </Button>
    </div>
  );
};
export default SignIn;
