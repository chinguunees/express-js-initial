"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const onChangeAge = (event: any) => {
    setAge(event.target.value);
  };
  const onChangePhoneNumber = (event: any) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="flex flex-col ml-50">
      <Input onChange={onChangeEmail} type="text" /> email
      <Input onChange={onChangePassword} type="text" /> password
      <Input onChange={onChangeAge} type="text" /> age
      <Input onChange={onChangePhoneNumber} type="text" /> phone number
      <Button>Register</Button>
    </div>
  );
};

export default SignUp;
