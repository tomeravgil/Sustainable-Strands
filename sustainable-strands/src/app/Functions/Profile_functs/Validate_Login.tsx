import axios from "axios"
import bcrypt from 'bcryptjs'


export async function validate_login(email: string, password: string){

    const parameters = {"Email": email };
    const user_data = await axios.get('http://localhost:3000/api/Profiles',{
        params: parameters});
    
    if(user_data.data.length == 0){
        //email does not exist in database
        return [2,{}];
    }

    if(bcrypt.compareSync(password, user_data.data[0]["Password"])){
         //valid
        return [1,user_data.data[0]];
    }
    //password is incorrect
    return [3,{}];


}