import axios from "axios"
import { CaseUpper } from "lucide-react"
import bcrypt from 'bcryptjs'

const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  };

export const checkUsername = async(username: string) => {
    const response = await axios.get('http://localhost:3000/api/Profiles',{
        params: {"Username": username}
    });
    console.log("Number of usernames",response.data.length);
    return response.data.length == 0;

}

export async function add_profile(formData: any){

    const profileData = {
        "Type of Hemp Business": "",
        "Name of Primary Contact": formData.firstName + " " + formData.lastName,
        "Name of Hemp Company": formData.company,
        "Company town": "",
        "Company state": formData.state.toUpperCase(),
        "Company zip code": 0,
        "Title": "",
        "Phone Number": formData.phone,
        "Email": formData.email,
        "Username": formData.username,
        "Password": await hashPassword(formData.password)
      }
      try {
        const response = await axios.post('http://localhost:3000/api/Profiles', profileData,{});
  
        console.log( "Profile created: ", response.data);
      } catch (error) {
        console.error('Error Posting data:', error);
      }
      // You can now send formData to your server or handle it as needed
    
}