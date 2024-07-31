"use server"
import { getSession, login, logout } from "../../../../lib/auth";
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'

export async function call_login(data: any){
    await login(data);
}

export async function call_logout(){
    await logout();
}

export async function call_getSession(){
    return await getSession();
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {

        const data = await getSession();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

