'use client'
import Link from "next/link";
import { useState } from "react";
import { getSession, login, logout } from "../../../lib/auth";
import axios from "axios"
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {call_login} from "../Functions/Cookie_Functions/route";
import { validate_login } from "../Functions/Profile_functs/Validate_Login";


export default function Login() {
  return (
    <main className="flex items-center justify-center min-h-screen dark:bg-black">
      <LoginForm />
    </main>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const session = getSession();
  

  const handleSubmit = async (event: React.FormEvent) => {
    //'use server';
    event.preventDefault();
    const loginData = {
      email,
      password,
    };
    const check_login = await validate_login(loginData.email,loginData.password);
    switch(check_login[0]){
      case 1:
        //valid
        await call_login(check_login[1]);
        break;
      case 2:
        //email does not exist in database
        console.log('email does not exist in database');
        break;
      case 3:
        //password is incorrect
        console.log('password is incorrect');
        break;

    }

  };
  

  return (
    <Card className="mx-auto max-w-sm dark:bg-gray-300">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="w-full dark:bg-white dark:text-black hover:bg-black hover:text-white"
          >
            Login
          </Button>
          <Button
            variant="outline"
            className="w-full dark:bg-black dark:text-white hover:bg-white hover:text-black"
          >
            Login with Google
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/SignUp" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
