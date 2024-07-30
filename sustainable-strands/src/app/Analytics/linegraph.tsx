"use client";
import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js/auto';

Chart.register(...registerables);

const LineGraph = ({ chartData }) => {
    const chartRef = useRef(null); // Create a reference for the chart instance

    useEffect(() => {
        const ctx = (document.getElementById('line') as HTMLCanvasElement).getContext('2d');

        // Destroy the previous chart instance if it exists
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Create new chart instance and save it to the ref
        chartRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartData.labels, // Ensure you provide the correct labels
                datasets: [{
                    label: "", // Set to an empty string to hide the label
                    // backgroundColor: 'blue',
                    borderColor: 'black',
                    borderWidth: 1,
                    data: chartData.values,
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: false // Hide the title
                    },
                    legend: {
                        display: false // Hide the legend
                    }
                },
                scales: {
                    x: {
                        display:false,
                        title: {
                            display: true,
                            text: 'Months'
                        },
                        ticks: {
                            display: false // Hide x-axis ticks
                        },
                    },
                    y: {
                        display:false,
                        title: {
                            display: true,
                            text: 'Income'
                        },
                        ticks: {
                            display: false // Hide y-axis ticks
                        },
                    }
                },
                elements: {
                    point: {
                        radius: 0.5,
                    }
                }
            }
        });

        // Cleanup function to destroy the chart on unmount
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [chartData]); // Run effect when chartData changes

    return <canvas id="line"></canvas>; // Canvas element for Chart.js
};

export default LineGraph;
