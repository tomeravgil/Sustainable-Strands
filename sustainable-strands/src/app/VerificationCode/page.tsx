'use client'
import React, { useState } from 'react';
import { check_code } from '../api/Profile_functs/Verification_Email';
import { verify_profile } from '../api/Profile_functs/Verification_Email';
import { delete_used_code } from '../api/Profile_functs/Verification_Email';
import { call_logout, call_login, call_getSession } from '../api/Cookie_Functions/route';
export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');

  // Handler for input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Handler for button click
  const handleButtonClick = async () => {
    const user_data = await call_getSession();
    const bool = await check_code(user_data["user"]["email"], inputValue);
    if(bool){
        verify_profile(user_data["user"]["email"]);
        delete_used_code(user_data["user"]["email"]);
        
        
        user_data["user"]["verified"] = true;
        await call_logout();

        const cookie_info = {"Email": user_data["user"]["email"], "Name of Primary Contact": user_data["user"]["name"], "Name of Hemp Company": user_data["user"]["company"], "Verified": user_data["user"]["verified"]}
        await call_login(cookie_info);
        //redirect 

    }else{
        console.log("Not Verified");
    }


    // Perform any action with the input value here
  };

  return (
    <div>
      <input
        className='text-black'
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
}
