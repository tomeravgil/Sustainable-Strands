import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import clientPromise from '../../../../lib/mongodb';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        
        const mongoClient = await clientPromise;
        const collection = mongoClient.db('Hemp_Dummy_Data').collection('Profiles');


        const params = new URLSearchParams(req.url);
        const paramObj: { [key: string]: string } = {};

        for (const [key, value] of params) {
            paramObj[key.split('?')[1]] = value;
        }
        const data = await collection.find(paramObj).toArray();


        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


