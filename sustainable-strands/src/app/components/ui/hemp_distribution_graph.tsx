"use client"
import React, { useEffect, useState } from 'react';
import {BarGraphData} from '../../Functions/Graph_Functs/Graph_Functions';
import BarGraph from "../../Analytics/black_bar_graph";

type string_json = {comp_name:string};
export default function Hemp_Distribution_Graph({ comp_name } :string_json ) {

  
    interface ChartData {
      labels: string[]; // Array of strings
      values: number[]; // Array of numbers (ints)
    }
  
    const [chartData, setChartData] = useState<ChartData>({ labels: [], values: [] });

    useEffect(() => {
        const fetchData = async () => {
            const graphData = await BarGraphData(comp_name);
            setChartData({
                labels: Object.keys(graphData),
                values: Object.values(graphData)
            });
        }
        fetchData();
    }, []);

    return (
      <BarGraph chartData={chartData}></BarGraph>
    );
}