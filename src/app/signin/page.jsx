"use client";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const SignIn = () => {
     const onSubmit =async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData= Object.fromEntries(formData.entries())
   console.log(userData)
   const { data, error } = await authClient.signIn.email({
    email: userData.email, // required
    password: userData.password, // required
    rememberMe: true,
    callbackURL: "/",
});
  };
    
  return (
    <main className="min-h-screen flex items-stretch bg-[#f7fbeb] overflow-hidden">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#2e3227]">

        {/* IMAGE */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4nGGa2gN2a31-n1i--hwOicoLk9DVDsdL9vJCWm3MqQaKxlhRQgLxOW5SB2jZhRHulmTpN5o6t1gmuEXaFb3ykryIiTWAs9avcD6m7Y3IlRbBeZUhCANkis8Q6ItXv_72NW9YtzCAUceMj7L1occZsbSi-FVXxu0jTItw-OeSEIhO6bSAgQdPLKnVJD8bpq0oa9nLwoP9d6q2liZBgZRT_80Ypws06_2me3ajdKUKjSX-t1gFfz6zAzgakZXKboRjw7H3fPaJsw"
          alt="Mountain"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10"></div>

        {/* CONTENT */}
        <div className="relative z-20 flex flex-col justify-between h-full w-full p-10">

          {/* LOGO */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-lime-400">
              Gotur
            </h2>
          </div>

          {/* TEXT */}
          <div className="max-w-md">
            <h1 className="text-5xl font-black leading-tight text-white mb-4">
              The world is waiting.
            </h1>

            <p className="text-lg leading-8 text-white/70">
              Every destination starts with a single step. Sign in to continue
              your global journey with Gotur.
            </p>
          </div>

          {/* FOOTER */}
          <div>
            <p className="text-sm text-white/40">
              © 2024 Gotur. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10 md:px-10 bg-[#f7fbeb]">

        <div className="w-full max-w-[440px]">

          {/* MOBILE LOGO */}
          <div className="lg:hidden mb-10">
            <h2 className="text-4xl font-black tracking-tight text-lime-700">
              Gotur
            </h2>
          </div>

          {/* HEADER */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900 mb-3">
              Welcome Back, Explorer
            </h1>

            <p className="text-gray-500 leading-7">
              Please enter your credentials to access your travel dashboard.
            </p>
          </div>

          {/* FORM */}
           <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

      <div className="flex gap-2">
        <Button type="submit">
         
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>

          {/* DIVIDER */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-gray-300"></div>

            <span className="text-xs font-semibold uppercase tracking-[3px] text-gray-400">
              or continue with
            </span>

            <div className="h-[1px] flex-1 bg-gray-300"></div>
          </div>

          {/* SOCIAL */}
          <div className="grid grid-cols-2 gap-4">

            <button className="flex items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white py-4 font-semibold text-gray-700 transition hover:bg-gray-50">
              <FcGoogle className="text-xl" />
              Google
            </button>

            <button className="flex items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white py-4 font-semibold text-gray-700 transition hover:bg-gray-50">
              <FaApple className="text-xl" />
              Apple
            </button>
          </div>

          {/* SIGNUP */}
          <div className="mt-10 text-center">
            <p className="text-gray-500">
              Don't have an account?{" "}
              <Link href="/signup">
                <button className="font-bold text-lime-700 hover:underline">
                  Create an Account
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;