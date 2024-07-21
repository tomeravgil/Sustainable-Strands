'use client'

import { useChat } from 'ai/react'
import Transaction_Data_Card from "./components/ui/transaction_cards";
import Hemp_Distrobution_Graph from "./components/ui/hemp_distrobution_graph";
import LineGraph from "./Analytics/linegraph"
import PieGraph from "./Analytics/piegraph";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch h-full">
      {messages.length > 0
        ? messages.map(m => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === 'user' ? 'User: ' : 'AI: '}
              {m.content}
            </div>
          ))
        : null}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
     
     


   
  )
   
    

};

