'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { check_code, verify_profile, delete_used_code } from '../api/Profile_functs/Verification_Email';
import { call_logout, call_login, call_getSession } from '../api/Cookie_Functions/route';
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
import Link from 'next/link';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  const router = useRouter();

  // Handler for input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Handler for button click
  const handleButtonClick = async () => {
    try {
      const user_data = await call_getSession();
      const finalValue = inputValue || '000000';
      const isValidCode = await check_code(user_data.user.email, finalValue);

      if (isValidCode) {
        await verify_profile(user_data.user.email);
        await delete_used_code(user_data.user.email);
        
        user_data.user.verified = true;
        await call_logout();

        const cookie_info = {
          Email: user_data.user.email,
          'Name of Primary Contact': user_data.user.name,
          'Name of Hemp Company': user_data.user.company,
          Verified: user_data.user.verified,
        };

        await call_login(cookie_info);
        router.push('/Home'); // Navigate to the Home page

      } else {
        console.log('Not Verified');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Verify</CardTitle>
          <CardDescription>
            To further protect you privacy, please enter verification code sent to you emaill.
            Be sure to check Junk/Spam folders.
              
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="password">Enter 6 digit verification code</Label>
              <Input className='text-black' type='text' value={inputValue} onChange={handleInputChange} />
            </div>
            <Button type="submit" className="w-full" onClick={handleButtonClick}> 
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>

        

    
  );
}






