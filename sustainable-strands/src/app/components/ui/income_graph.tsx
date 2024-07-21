"use client";
import { useEffect, useState } from 'react';
import LineGraph from "../../Analytics/linegraph"; // Adjust the import path as necessary
import { LineGraphData } from '../../API/Graph_Functs/Graph_Functions'; // Adjust the import path as necessary

const IncomeGraph = ({ comp_name }) => {
    const [chartData, setChartData] = useState({ labels: [], values: [] }); // Initialize with empty labels and values

    useEffect(() => {
        const fetchChartData = async () => {
            const data = await LineGraphData(comp_name);
            const values = Object.values(data); // Extract values for the graph
            const labels = Object.keys(data); // Extract month-year keys for labels
            setChartData({ labels, values }); // Set both labels and values
        };

        fetchChartData();
    }, [comp_name]); // Refetch when comp_name changes

    return (
        <div>
            <h2>Monthly Income Graph</h2>
            <LineGraph chartData={chartData} />
        </div>
    );
};

export default IncomeGraph;
