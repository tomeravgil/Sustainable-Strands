"use client";
import { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import axios from 'axios';

Chart.register(...registerables);

export default function Analytics() {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({ xValues: [], yValues: [] });

    useEffect(() => {
        // Fetch data from the backend API
        axios.get('http://localhost:3001/api/data')
            .then(response => {
                setChartData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        if (chartData.xValues.length === 0 || chartData.yValues.length === 0) return;

        const ctx = document.getElementById('barChart').getContext('2d');

        // Destroy the previous chart instance if it exists
        if (chartRef.current) {
            chartRef.current.destroy();
        }
        var barColors =  [ "black"];
        // Create new chart instance and save it to the ref
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartData.xValues,
                datasets: [{
                    label: '', // Set to an empty string to hide the label
                    backgroundColor: barColors,
                    borderColor: 'rgba(0, 0, 255, 1)',
                    borderWidth: 1,
                    data: chartData.yValues,
                    borderRadius: 15
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
                        },

                    },
                    y: {
                        display:false,
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
    }, [chartData]);

    return (
        <>
            <canvas id="barChart" style={{ width: '20%', maxWidth: '700px', height: '5%' }}></canvas>
            <canvas id="barChart" style={{ width: '20%', maxWidth: '700px', height: '5%' }}></canvas>
        </>
    );
}
