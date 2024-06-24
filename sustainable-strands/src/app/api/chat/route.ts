import { HfInference } from '@huggingface/inference'
import { HuggingFaceStream, StreamingTextResponse } from 'ai'
import { experimental_buildOpenAssistantPrompt } from 'ai/prompts'
import { env } from 'process';

// Create a new HuggingFace Inference instance
console.log(process.env.HUGGINGFACE_API_KEY);
const Hf = new HfInference("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")

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

function buildPrompt(
  messages: { content: string; role: 'system' | 'user' | 'assistant' }[]
) {
  return (
    messages
      .map(({ content, role }) => {
        if (role === 'user') {
          return `<|prompter|>${content}<|endoftext|>`
        } else {
          return `<|assistant|>${content}<|endoftext|>`
        }
      })
      .join('') + '<|assistant|>'
  )
}

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  let { messages } = await req.json()

  const promptEngineering = "You are an intelligent and knowledgeable chatbot specializing in hemp, if a user asks a question that is not related to hemp then respond with a generic response about how you are a hemp focused bot. Your goal is to provide accurate, informative, and clear answers to questions related to hemp. This includes, but is not limited to, its cultivation, uses, benefits, legal status, and differences from other similar plants like marijuana. Your tone should be professional yet friendly, and you should strive to explain complex topics in an easy-to-understand manner while also making your answers succinct and low word count. You should focus on the laws and regulations surrounding NYS, if they ask about specific regulations give them a general overview then tell them they can find more information at our Info Hub page. The question is this: "

  messages = messages.map((message: { content: string; role: 'system' | 'user' | 'assistant' }) => {
    if (message.role === 'user') {
      return { ...message, content: `${promptEngineering} ${message.content}` };
    } else {
      return message;
    }
  });

  const response = Hf.textGenerationStream({
    model: 'meta-llama/Meta-Llama-3-8B-Instruct',
    inputs: buildPrompt(messages),
    parameters: {
      max_new_tokens: 500,
      // @ts-ignore (this is a valid parameter specifically in OpenAssistant models)
      typical_p: 0.2,
      repetition_penalty: 1,
      truncate: 1000,
      return_full_text: false
    }
  })

  // Convert the response into a friendly text-stream
  const stream = HuggingFaceStream(response)

  // Respond with the stream
  return new StreamingTextResponse(stream)
}