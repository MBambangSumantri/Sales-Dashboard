import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

export default function Dashboard() {
    const data = {
        labels: ["04 Apr '22", "06 Apr '22", "08 Apr '22", "10 Apr '22"],
        datasets: [
            {
                data: [3200000, 2500000, 3000000, 2000000],
                backgroundColor: 'transparent',
                borderColor: '#545DFF',
                pointBorderColor: 'transparent',
                pointBorderWidth: 4,
                tension: 0.5
            }
        ]
    }
    const options = {
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    borderDash: [10]
                }
            }
        }
    }

    return (
        <div>
            <div className="h-16 px-7 py-7">
                <p className="text-3xl font-bold">Dashboard</p>
                <p className="text-xl font-medium">Today’s date: Thu, 24 Nov 2022</p>
            </div>
            <div className="mt-20 grid lg:grid-cols-3 mx-2 rounded-lg">
                <div className="flex flex-col shadow-md rounded-lg mx-5 px-3 py-3 font-bold">
                    <div className="text-xl text-[#7A7A7A]">Profit</div>
                    <div className="text-3xl">RP 11.500.000</div>
                    <div className="flex flex-row-reverse text-sm text-red-500">0.5% compared to 7 days ago</div>
                </div>
                <div className="flex flex-col shadow-md rounded-lg mx-5 px-3 py-3 font-bold">
                    <div className="text-xl text-[#7A7A7A]">Sales</div>
                    <div className="text-3xl font-semibold">RP 56.000.000</div>
                    <div className="flex flex-row-reverse text-sm text-green-500">0.5% compared to 7 days ago</div>
                </div>
                <div className="flex flex-col shadow-md rounded-lg mx-5 px-3 py-3 font-bold">
                    <div className="text-xl text-[#7A7A7A]">Transaction</div>
                    <div className="flex text-3xl font-semibold">
                        1090<div className="text-xl mt-1 ml-2 font-semibold">transactions</div>
                    </div>
                    <div className="flex flex-row-reverse text-sm text-yellow-500">0.5% compared to 7 days ago</div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 mt-6 mx-8">
                <Line className="w-4 h-5 shadow-md" data={data} options={options}></Line>
            </div>
        </div>
    )
}
