import axios from "axios";



export async function verify_email(email: string, code: string){
    try {
        console.log("here");
        const res = await fetch('http://localhost:3000/api/Send_Email', { // Ensure the path matches the API route file
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to: email, subject: "Sustainable Strands Verification" , text: "verification code:" + code }),
      });

      const data = await res.json();
     
      if (data.error) {
        console.error('Email error:', data.error);
      }
    } catch (error) {
      console.error('Request error:', error);
    }
};

export async function code(){
    return Math.floor(100000 + Math.random() * 900000) as number;
 };

export async function send_code(email: string){
    const data = await axios.get('http://localhost:3000/api/Verification_Api',{
        params: {"email": email}});
    if(data.data.length != 0){
        const id = data.data[0].id;
        const response = await axios.delete('http://localhost:3000/api/Verification_Api', {
            data : { id }
        })
        console.log("Response: ", response);
    }

    const num = await code();
    console.log(num);
    verify_email(email, num.toString());

    const response = await axios.post('http://localhost:3000/api/Verification_Api',{"email": email, "code": num } ,{});


 };

export async function check_code(email: string, code: string) {
    const response = await axios.get('http://localhost:3000/api/Verification_Api',{
        params: {"email": email}});
    if(response.data[0]["code"] == code){
        return true;
    }
    return false;
    
}
export async function verify_profile(email: string){
    const data = await axios.get('http://localhost:3000/api/Profiles',{
        params: {"Email": email}});

    const updateData = {
        id: data.data[0]["_id"],
        "Verified": true
    }
    const response = await axios.put('http://localhost:3000/api/Profiles', updateData, {})
    console.log(response);
}

export async function delete_used_code(email:string) {
    const data = await axios.get('http://localhost:3000/api/Verification_Api',{
        params: {"email": email}});

    const id = data.data[0]["_id"];
        const response = await axios.delete('http://localhost:3000/api/Verification_Api', {
            data : { id }
        })
        console.log("Response: ", response);
    
}





