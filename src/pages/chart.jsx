import BarChart from "@/components/charts/BarChart";
import CalenderChart from "@/components/charts/CalenderChart";
import GroupedBar from "@/components/charts/GroupedBar";
import PieChart from "@/components/charts/PieChart";

import React from "react";

export default function chart() {
    return (
        <div className="h-[75vh] max-w-5xl m-auto">
            <h1 className="text-center font-bold text-xl py-3">
                React Responsive bar chart
            </h1>
            <BarChart />
            <h1 className="text-center font-bold text-xl py-3">
                React Responsive Pie chart
            </h1>
            <PieChart />
            <h1 className="text-center font-bold text-xl py-3">
                React Responsive Grouped bar chart
            </h1>
            <GroupedBar />
            <h1 className="text-center font-bold text-xl py-3">
                React Responsive Calender chart
            </h1>
            <CalenderChart />

        </div>
    );
}
