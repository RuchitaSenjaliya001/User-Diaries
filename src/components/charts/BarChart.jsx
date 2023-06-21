import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const dataBar = [
    {
        day: "Monday",
        degress: 59,
    },
    {
        day: "Tuesday",
        degress: 61,
    },
    {
        day: "Wednesday",
        degress: 55,
    },
    {
        day: "Thursday",
        degress: 78,
    },
    {
        day: "Friday",
        degress: 71,
    },
    {
        day: "Saturday",
        degress: 56,
    },
    {
        day: "Sunday",
        degress: 67,
    },
];

export default function BarChart() {
    return (
        <>
            <h1 className="text-center font-bold text-xl py-3">
                React Responsive bar chart
            </h1>
            <ResponsiveBar
                data={dataBar}
                keys={["degress"]}
                indexBy="day"
                margin={{ top: 30, right: 50, bottom: 50, left: 60 }}
                padding={0.4}
                valueScale={{ type: "linear" }}
                colors="#3182CE"
                animate={true}
                enableLabel={false}
                axisTop={null}
                axisRight={null}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "degrees",
                    legendPosition: "middle",
                    legendOffset: -40,
                }}
            /></>

    );
}
