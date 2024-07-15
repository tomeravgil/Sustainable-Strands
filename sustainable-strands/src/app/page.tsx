import Image from "next/image";
import Transaction_Data_Card from "./components/ui/transaction_cards";
import Hemp_Distrobution_Graph from "./components/ui/hemp_distrobution_graph";
import LineGraph from "./Analytics/linegraph"
import PieGraph from "./Analytics/piegraph";

const line_data = {
  values:[9023, 9184, 9512, 9928, 9704, 9483, 9875, 9672, 9781, 9569, 9440, 9305, 9752, 9137, 9863, 9921, 9654, 9432, 9779, 9871, 9034, 9316, 9198, 9784, 9531, 9997, 9070]
}
  
export default async function Home() {

  
  
  return (
    <>
      <Transaction_Data_Card></Transaction_Data_Card>
      <Hemp_Distrobution_Graph></Hemp_Distrobution_Graph>
      <LineGraph chartData={line_data}></LineGraph>


    </>
    

  );
}


