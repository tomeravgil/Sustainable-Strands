
import React from 'react';
import {BarGraphData} from '../.././API/Graph_Functs/Graph_Functions';
import BarGraph from "../../Analytics/black_bar_graph";

export default async function Hemp_Distrobution_Graph() {

  
    interface ChartData {
      labels: string[]; // Array of strings
      values: number[]; // Array of numbers (ints)
    }
  
  
  
  
    const chartData: ChartData = {
      labels:[],
      values:[]
    };
  
  
    const graphData = await BarGraphData();
    chartData.labels = Object.keys(graphData);
    chartData.values = Object.values(graphData);
    return (
      <BarGraph chartData={chartData}></BarGraph>
    );
}