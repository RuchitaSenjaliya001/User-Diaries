import BarChart from "@/components/charts/BarChart";
import CalenderChart from "@/components/charts/CalenderChart";
import GroupedBar from "@/components/charts/GroupedBar";
import PieChart from "@/components/charts/PieChart";

import React from "react";

export default function chart() {
    return (
        <div className="h-[75vh] max-w-5xl m-auto">
            <BarChart />
            <PieChart />
            <GroupedBar />
            <CalenderChart />
        </div>
    );
}
