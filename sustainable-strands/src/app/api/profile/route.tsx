import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../../lib/mongodb';
import { error } from 'console';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        // const{ filter } = req.query;
        // const actualFilter = filter || {};
        const mongoClient = await clientPromise;
        console.log('MongoDB client connected');
        // const query = filter ? { field: filter } : {}; // Adjust the query based on your filter
       
        const data = await mongoClient.db('Hemp_Dummy_Data').collection('Profiles').find({'Company state': 'MN'}).toArray();
        console.log('Data fetched successfully:', data);
        return new Response(JSON.stringify(data),
        {status: 200, headers:{'Content-Type': 'application/json'}});
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


