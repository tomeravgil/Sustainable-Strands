import axios from "axios"
import {get_conversation_id} from "./conversation_id"

export async function create_conversation(to_email: string, from_email: string ){
   const convo_id = get_conversation_id(to_email, from_email);
   const convo_data = {
    "conversation_id": convo_id,
    "messages": []
   }
   const response = await axios.post('http://localhost:3000/api/Messages', convo_data,{});
}

