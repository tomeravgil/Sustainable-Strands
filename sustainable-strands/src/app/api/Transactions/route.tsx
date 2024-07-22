import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import clientPromise from '../../../../lib/mongodb';
import { ObjectId } from 'mongodb'

async function streamToJson(stream: ReadableStream<Uint8Array>): Promise<any> {
    const reader = stream.getReader();
    const decoder = new TextDecoder();
    let jsonStr = '';

    async function read(): Promise<any> {
        const { done, value } = await reader.read();
        if (done) {
            return JSON.parse(jsonStr);
        }
        jsonStr += decoder.decode(value, { stream: true });
        return read();
    }

    return read();
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        
        const mongoClient = await clientPromise;
        const collection = mongoClient.db('Hemp_Dummy_Data').collection('Transactions');


        const params = new URLSearchParams(req.url);
        const paramObj: { [key: string]: string } = {};
        let i = 0;
        for (const [key, value] of params) {
            if( i == 0){
                paramObj[key.split('?')[1]] = value;
            }else{
                paramObj[key] = value;
            }
            i++;
        }
        const data = await collection.find(paramObj).toArray();


        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function POST(req: NextApiRequest, res: NextApiResponse){
    try{
        const mongoClient = await clientPromise;
        const collection = mongoClient.db('Hemp_Dummy_Data').collection('Transactions');

        const body = await streamToJson(req.body);
 
        const result = await collection.insertOne(body);
        return NextResponse.json(result);

    }catch(error){
        console.error('Error posting data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
    try{
        const mongoClient = await clientPromise;
        const collection = mongoClient.db('Hemp_Dummy_Data').collection('Transactions');


        const updateBody = await streamToJson(req.body);

        const { id, ...updateData } = updateBody;

        const putResult = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updateData }
          )
        

        return NextResponse.json(putResult);
        // res.status(200).json({ message: 'Profile updated', result: putResult })

    }catch(error){
        console.error('Error updating data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse){
    try{
        const mongoClient = await clientPromise;
        const collection = mongoClient.db('Hemp_Dummy_Data').collection('Transactions');

        const deleteBody = await streamToJson(req.body);

        const deleteId = deleteBody.id
        const deleteResult = await collection.deleteOne({ _id: new ObjectId(deleteId) })
        return NextResponse.json(deleteResult);

    }catch(error){
        console.error('Error deleting data:', error);
        res.status(500).json({ message: 'Internal Server Error' });

    }
    
}


