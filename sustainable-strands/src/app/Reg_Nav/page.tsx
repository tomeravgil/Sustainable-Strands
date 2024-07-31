"use client"
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
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
export const animals = [
  {label: "Hemp Grower Liscencing", value: "cat", description: "The second most popular pet in the world"},
  {label: "Sampling Agent Certification   ", value: "dog", description: "The most popular pet in the world"},
  {label: "Testing Laboratory Identification", value: "elephant", description: "The largest land animal"}
];
export default function LoginForm() {
  return (
    <>
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <Autocomplete
      isRequired
      label="Favorite Animal"
      defaultItems={animals}
      placeholder="Search an animal"
      defaultSelectedKey="cat"
      className={}
    >
      {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
    </Autocomplete>
      
    </Card>
   
  </>
  )
}
