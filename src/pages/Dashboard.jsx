import React from 'react'

export default function Dashboard() {
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
        </div>
    )
}
