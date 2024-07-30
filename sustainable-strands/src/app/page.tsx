'use client'

import { useChat } from 'ai/react'
import Transaction_Data_Card from "./components/ui/transaction_cards";
import Hemp_Distrobution_Graph from "./components/ui/hemp_distribution_graph";
import LineGraph from "./Analytics/linegraph"
import PieGraph from "./Analytics/piegraph";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Ensure the router is ready befo re pushing
    router.push('/Home');
  }, [router]);

  return null; // or a loading spinner, or any other placeholder
}

  const router = useRouter();

  useEffect(() => {
    // Ensure the router is ready befo re pushing
    router.push('/Home');
  }, [router]);

  return null; // or a loading spinner, or any other placeholder
}
