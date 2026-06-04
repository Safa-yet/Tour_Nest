"use client";

import React from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const SignUp = () => {

    const Registration = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData)
        const { data, error } = await authClient.signUp.email({
    name: userData.name, // required
    email: userData.email, // required
    password: userData.password, // required
    profile: userData.profile, // optional
    // callbackURL: "https://example.com/callback",

});

console.log(data,error);
 
    
    };
  return (
    <main className="min-h-screen bg-[#f4f9e8] overflow-hidden">
      <section className="flex min-h-screen flex-col lg:flex-row">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-[44%] bg-white flex items-center justify-center px-5 sm:px-8 lg:px-10 py-10 lg:py-6">
          
          <div className="w-full max-w-[430px]">

            {/* LOGO */}
            <div className="mb-5">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-lime-700">
                Gotur
              </h2>
            </div>

            {/* HEADER */}
            <div className="space-y-3 mb-7">
              <h1 className="text-4xl sm:text-5xl lg:text-4xl leading-tight font-black text-gray-900">
                Begin Your <br /> Odyssey
              </h1>

              <p className="text-sm sm:text-[15px] leading-7 text-gray-500 max-w-md">
                Join the elite few who never stop exploring hidden destinations
                around the world.
              </p>
            </div>

            {/* FORM */}
            <Form className="w-full flex flex-col gap-5" onSubmit={Registration}>

              {/* NAME */}
              <TextField
                isRequired
                name="name"
                type="text"
                className="w-full"
              >
                <Label className="mb-2 text-sm font-semibold text-gray-600">
                  Full Name
                </Label>

                <Input
                  placeholder="John Doe"
                  className="w-full"
                />

                <FieldError />
              </TextField>

              {/* EMAIL */}
              <TextField
                isRequired
                name="email"
                type="email"
                className="w-full"
                validate={(value) => {
                  if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                  ) {
                    return "Please enter a valid email address";
                  }

                  return null;
                }}
              >
                <Label className="mb-2 text-sm font-semibold text-gray-600">
                  Email
                </Label>

                <Input
                  placeholder="john@example.com"
                  className="w-full"
                />

                <FieldError />
              </TextField>
              {/* PROFILE IMAGE */}
<TextField
  name="profile"
  type="url"
  accept="image/*"
  className="w-full"
>
  <Label className="mb-2 text-sm font-semibold text-gray-600">
    Profile Image
  </Label>

  <Input
    type="url"
    placeholder="https://example.com/profile.jpg"
    className="w-full"
  />

  <Description className="text-xs text-gray-400 mt-2">
    Upload a profile picture (JPG, PNG, WEBP)
  </Description>

  <FieldError />
</TextField>
              

              {/* PASSWORD */}
              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                className="w-full"
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
                <Label className="mb-2 text-sm font-semibold text-gray-600">
                  Password
                </Label>

                <Input
                  placeholder="Enter your password"
                  className="w-full"
                />

                <Description className="text-xs text-gray-400 mt-2">
                  Must be at least 8 characters with 1 uppercase and 1 number
                </Description>

                <FieldError />
              </TextField>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
                
                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-lime-600 text-white font-semibold hover:bg-lime-700 transition"
                >
                  Create Account
                </Button>

                <Button
                  type="reset"
                  variant="bordered"
                  className="w-full h-12 rounded-xl text-gray-500 border-gray-200 hover:bg-gray-50 transition"
                >
                  Reset
                </Button>
              </div>
            </Form>

            {/* LOGIN */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="font-bold text-lime-700 hover:underline"
                >
                  Log in
                </Link>
              </p>
            </div>

            {/* DIVIDER */}
            <div className="relative my-7">
              <div className="h-[1px] w-full bg-gray-200"></div>

              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-xs text-gray-400">
                OR CONTINUE WITH
              </span>
            </div>

            {/* SOCIAL LOGIN */}
            <div className="space-y-3">

              <Button
                variant="bordered"
                className="w-full h-12 rounded-xl text-black border-gray-200 hover:bg-gray-50"
              >
                <FcGoogle className="text-xl" />
                Sign in with Google
              </Button>

              <Button
                variant="bordered"
                className="w-full h-12 rounded-xl text-black border-gray-200 hover:bg-gray-50"
              >
                <FaGithub className="text-xl" />
                Sign in with GitHub
              </Button>

              <Button
                variant="bordered"
                className="w-full h-12 rounded-xl text-black border-gray-200 hover:bg-gray-50"
              >
                <SiApple className="text-xl" />
                Sign in with Apple
              </Button>
            </div>

            {/* FOOTER */}
            <div className="mt-8 border-t border-gray-200 pt-5">
              <p className="text-center text-xs leading-6 text-gray-400">
                By signing up, you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:block relative flex-1 min-h-screen overflow-hidden">

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
            alt="Aurora"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

          {/* CONTENT */}
          <div className="absolute bottom-8 left-8 right-8 xl:left-12 xl:right-12 z-20">

            <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-[32px] p-6 xl:p-8 shadow-2xl">

              {/* TOP */}
              <div className="flex items-start gap-4">

                <div className="h-14 w-14 rounded-2xl bg-lime-400/20 flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-lime-300"
                    style={{
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    stars
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Explorer Status Awaits
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/70 max-w-md">
                    Join over 150,000 travelers discovering elite destinations
                    through the world’s most exclusive adventure network.
                  </p>
                </div>
              </div>

              {/* USERS */}
              <div className="mt-7 flex items-center justify-between gap-5">

                <div className="flex -space-x-4">

                  <img
                    src="https://i.pravatar.cc/100?img=1"
                    alt=""
                    className="h-12 w-12 rounded-full border-2 border-white object-cover"
                  />

                  <img
                    src="https://i.pravatar.cc/100?img=5"
                    alt=""
                    className="h-12 w-12 rounded-full border-2 border-white object-cover"
                  />

                  <img
                    src="https://i.pravatar.cc/100?img=8"
                    alt=""
                    className="h-12 w-12 rounded-full border-2 border-white object-cover"
                  />

                  <div className="h-12 w-12 rounded-full border-2 border-white bg-lime-500 flex items-center justify-center text-sm font-bold text-white">
                    +12k
                  </div>
                </div>

                <div className="hidden xl:flex items-center gap-2 text-white/80 text-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    public
                  </span>

                  Trusted by global explorers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUp;