"use server"
import { getSession, login, logout } from "../../../../lib/auth";

export async function call_login(data: any){
    await login(data);
}

export async function call_logout(){
    await logout();
}

export async function call_getSession(){
    return await getSession();
}
