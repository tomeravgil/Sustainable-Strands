import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import { sendMail } from '@/app/utils/mailer';


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



export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = await streamToJson(req.body);
  const { to, subject, text } = body;
  
  if (!to || !subject || !text) {
    return NextResponse.json({ message: ' Missing required fields' });
  }

  try {
    
    await sendMail(to, subject, text);


    return NextResponse.json({"message": "success"});
  } catch (error) {
    return NextResponse.json({ message: 'Failed to send email' });
  }
};
