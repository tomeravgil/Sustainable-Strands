import React from 'react';
import {PieGraphData} from '../../Functions/Graph_Functs/Graph_Functions';
import PieGraph from "../../Analytics/piegraph";

type Hemp_String = {
    hemp_type:string
}
export default async function State_Distrobution ({hemp_type}: Hemp_String) {
 
    interface ChartData {
      labels: string[]; // Array of strings
      values: number[]; // Array of numbers (ints)
    }
  
    const chartData: ChartData = {
      labels: [],
      values: []
    };
  
    // Assuming PieGraphData is an async function that takes hemp_type as an argument
    const graphData = await PieGraphData(hemp_type);
    chartData.labels = Object.keys(graphData);
    chartData.values = Object.values(graphData);
  
    return (
      <PieGraph chartData={chartData} uniqueId={"income_chart"}></PieGraph>
    );
  }
  