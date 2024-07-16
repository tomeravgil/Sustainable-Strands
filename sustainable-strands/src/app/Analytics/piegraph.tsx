"use client";
import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js/auto';

Chart.register(...registerables);

const bg_colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFA1", "#FF8F33", "#8FFF33", "#338FFF", "#FF33D4",
    // ... other colors
];

const PieGraph = ({ chartData, uniqueId }) => {
    const chartRef = useRef(null); // Create a reference for the chart instance

    useEffect(() => {
        const ctx = document.getElementById(`pieChart-${uniqueId}`).getContext('2d');

        // Destroy the previous chart instance if it exists
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Calculate total transactions
        const totalTransactions = chartData.values.reduce((acc, value) => acc + value, 0);

        // Create new chart instance and save it to the ref
        chartRef.current = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: chartData.labels,
                datasets: [
                    {
                        label: 'Market Share',
                        data: chartData.values,
                        backgroundColor: bg_colors,
                        hoverOffset: 10
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        text: `Total Transactions: ${totalTransactions}`,
                        padding: {
                            top: 10,
                            bottom: 30
                        }
                    }
                }
            },
        });

        // Cleanup function to destroy the chart on unmount
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [chartData, uniqueId]); // Run effect when chartData or uniqueId changes

    return <canvas id={`pieChart-${uniqueId}`}></canvas>; // Canvas element for Chart.js
};

export default PieGraph;
