"use client";
import { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js/auto';
import axios from 'axios';


Chart.register(...registerables);




const PieGraph = ({ chartData }) => {
    const chartRef = useRef(null); // Create a reference for the chart instance
   

    useEffect(() => {
        

        const ctx = (document.getElementById('pieChart') as HTMLCanvasElement).getContext('2d');

        // Destroy the previous chart instance if it exists
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Create new chart instance and save it to the ref
        chartRef.current = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: chartData.labels,
                datasets: [
                  {
                    label: 'Market Share',
                    data: chartData.values, 
                    backgroundColor: ['#9C89B8', '#F0A6CA', '#EFC3E6', '#F0E6EF', '#B8BEDD'],
                    hoverOffset: 10
                  }
                ]
            },
            options: {
            responsive: true,
            plugins: {
                legend: {
                    display:false
                },
                title: {
                display: true,
                text: ''
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
    }, ); // Run effect when chartData changes

    return <canvas id="pieChart"></canvas>; // Canvas element for Chart.js
};

export default PieGraph;
