"use client";
import { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js/auto';
import axios from 'axios';


Chart.register(...registerables);




const BarGraph = ({ chartData }) => {
    const chartRef = useRef(null); // Create a reference for the chart instance

    useEffect(() => {
        

        const ctx = (document.getElementById('barChart') as HTMLCanvasElement).getContext('2d');

        // Destroy the previous chart instance if it exists
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Create new chart instance and save it to the ref
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: '', // Set to an empty string to hide the label
                    backgroundColor: ['black'],
                    borderColor: 'rgba(0, 0, 255, 1)',
                    borderWidth: 1,
                    data: chartData.values,
                    borderRadius: 5
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
                        display: false,
                        ticks: {
                            display: false // Hide x-axis ticks
                        },
                        grid: {
                            display: false // Hide x-axis grid lines
                        }
                    },
                    y: {
                        display: false,
                        ticks: {
                            display: false // Hide y-axis ticks
                        },
                        grid: {
                            display: false // Hide y-axis grid lines
                        }
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

    return <canvas id="barChart"></canvas>; // Canvas element for Chart.js
};

export default BarGraph;
