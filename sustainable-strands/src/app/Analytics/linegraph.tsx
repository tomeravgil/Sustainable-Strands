"use client";
import { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js/auto';
import axios from 'axios';
import { count } from 'console';


Chart.register(...registerables);


const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
function months(config) {
    var cfg = config || {};
    var count = cfg.count || 12;
    var section = cfg.section;
    var values = [];
    var i, value;
  
    for (i = 0; i < count; ++i) {
      value = MONTHS[Math.ceil(i) % 12];
      values.push(value.substring(0, section));
    }
  
    return values;
}

const LineGraph = ({ chartData }) => {
    const chartRef = useRef(null); // Create a reference for the chart instance

    useEffect(() => {
        const size = chartData.yValues.length;
        const labels = months({count:size});
        const ctx = (document.getElementById('line') as HTMLCanvasElement).getContext('2d');

        // Destroy the previous chart instance if it exists
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Create new chart instance and save it to the ref
        chartRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: "Monthly Income", // Set to an empty string to hide the label
                    backgroundColor: ['black'],
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
                },
                elements:{
                    point:{
                        radius: .5,

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
