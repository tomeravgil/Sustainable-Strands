'use client'
import React, { useState } from 'react';
import { check_code } from '../api/Profile_functs/Verification_Email';
import { verify_profile } from '../api/Profile_functs/Verification_Email';
import { delete_used_code } from '../api/Profile_functs/Verification_Email';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');

  // Handler for input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Handler for button click
  const handleButtonClick = async () => {
    console.log('Input Value:', inputValue);
    const bool = await check_code("henry.babcock@outlook.com", inputValue);
    if(bool){
        verify_profile("henry.babcock@outlook.com");
        delete_used_code("henry.babcock@outlook.com");
        
        console.log("Verified");

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
