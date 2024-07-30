import axios from "axios"
import {get_conversation_id} from "./conversation_id"

interface Message {
    from: string
    date: Date;
    body: string;
}

export async function send_message(to_email: string, from_email: string, messages: Array<Message>, ){
    const conversation_id = get_conversation_id(to_email, from_email);
    console.log(conversation_id);
    const response = await axios.get('http://localhost:3000/api/Messages',{
        params: {"conversation_id": conversation_id}
    });

    const new_messages = response.data[0].messages;
    for(const message of messages){
        new_messages.push(message)
    }
    const updateData = {
        id: response.data[0]["_id"],
        "messages": new_messages
    }
        
    const add_response = await axios.put('http://localhost:3000/api/Messages', updateData, {});

}

