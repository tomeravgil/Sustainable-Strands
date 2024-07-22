"use client"
import Link from "next/link"
import axios from "axios"
import { send_code } from "../api/Profile_functs/Verification_Email"
import { useState, ChangeEvent, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { add_profile } from "../api/Profile_functs/Add_Profile"
import { checkUsername } from "../api/Profile_functs/Add_Profile"
import {call_login} from "../api/Cookie_Functions/route"

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  state: string;
  username: string;
  password: string;
}


export default function SignUp(){
    return (
        <main className="flex items-center justify-center min-h-screen dark:bg-black">
            <SignUpForm />
        </main>
    )
}

function SignUpForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    state: "",
    username: "",
    password: ""
  });

  const handleChange =  (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const usernameAvalable = await checkUsername(formData.username);
    if(usernameAvalable){

      const response =  await add_profile(formData);
      send_code(formData.email);
      call_login(response);
      //redirect to verification code page

    }else{
      console.log("Username taken")

    }
    
    
    // You can now send formData to your server or handle it as needed
  };

  return (
    <Card className="mx-auto max-w-sm dark:bg-gray-300">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="Max" required onChange={handleChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Robinson" required onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="aaa@bbb.com" required onChange={handleChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="(123) 456-7890" required onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="A&B Co." required onChange={handleChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="state">Company State</Label>
                <Input id="state" placeholder="MN" required onChange={handleChange} />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" onChange={handleChange} />
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-white hover:text-black">
              Create an account
            </Button>
            <Button variant="outline" className="w-full hover:bg-black hover:text-white">
              Sign up with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/Login" className="underline">
              Sign in
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}