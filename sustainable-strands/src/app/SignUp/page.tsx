import Link from "next/link"

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

export default function SignUp(){
    return (
        <main className="flex items-center justify-center min-h-screen dark:bg-black">
            <SignUpForm />
        </main>
    )
}

function SignUpForm() {
  return (
    <Card className="mx-auto max-w-sm dark:bg-gray-300">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="aaa@bbb.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="(123) 456-7890" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" placeholder="A&B Co." required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="state">Company State</Label>
              <Input id="state" placeholder="MN" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
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
      </CardContent>
    </Card>
  )
}
