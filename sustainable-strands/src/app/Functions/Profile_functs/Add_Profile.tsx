import axios from "axios"
import { CaseUpper } from "lucide-react"
import bcrypt from 'bcryptjs'

export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  };

export const checkEmail = async(email: string) => {
    const response = await axios.get('http://localhost:3000/api/Profiles',{
        params: {"Email": email}
    });
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
        "Password": await hashPassword(formData.password),
        "Verified": false
      }
      try {
        const response = await axios.post('http://localhost:3000/api/Profiles', profileData,{});
        return profileData;
      } catch (error) {
        console.error('Error Posting data:', error);
      }
      // You can now send formData to your server or handle it as needed
    
}