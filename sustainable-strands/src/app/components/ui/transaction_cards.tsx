"use client"
import React, { useState, useEffect } from 'react';
import Transaction_Data from '../../API/Transaction_Data/transaction_data';

interface TransactionData {
    prev_month_income: number;
    cur_month_income: number;
    percent_increase: number;
    lifetime_income: number;
    annual_income: number;
    cur_month_transactions: number;
    prev_month_transactions: number;
    annual_transactions: number;
    lifetime_transactions: number;
}

export default function Transaction_Data_Card() {
    const [transactions, setTransactions] = useState<TransactionData | null>(null);

    useEffect(() => {
        async function fetchData() {
            const data = await Transaction_Data("Hemp Co.");
            setTransactions(data);
        }
        fetchData();
    }, []);

    if (!transactions) {
        return <div>Loading...</div>; // Or a spinner
    }

    const dataPoints = [
        { label: 'Current Month Income', value: `$${transactions.cur_month_income}` },
        { label: 'Percent Increase', value: `${transactions.percent_increase.toFixed(2)}%` },
        { label: 'Lifetime Income', value: `$${transactions.lifetime_income}` },
        { label: 'YTD Income', value: `$${transactions.annual_income}` },
        { label: 'Current Month Transactions', value: `${transactions.cur_month_transactions}` },
        { label: 'YTD Transactions', value: `${transactions.annual_transactions}` },
        { label: 'Lifetime Transactions', value: `${transactions.lifetime_transactions}` },
    ];

    return (
        <div className="grid grid-cols-1 gap-4">
            {dataPoints.map((dataPoint, index) => (
                <a
                    key={index}
                    href="#"
                    className=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{dataPoint.label}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {dataPoint.value}
                    </p>
                </a>
            ))}
        </div>
    );
}
