import { ResponsiveBar } from '@nivo/bar'
import React from 'react'

const groupedData = [
    {
        "country": "AD",
        "hot dog": 96,
        "hot dogColor": "hsl(274, 70%, 50%)",
        "burger": 192,
        "burgerColor": "hsl(203, 70%, 50%)",
        "sandwich": 175,
        "sandwichColor": "hsl(126, 70%, 50%)",
        "kebab": 132,
        "kebabColor": "hsl(199, 70%, 50%)",
        "fries": 113,
        "friesColor": "hsl(278, 70%, 50%)",
        "donut": 153,
        "donutColor": "hsl(108, 70%, 50%)"
    },
    {
        "country": "AE",
        "hot dog": 102,
        "hot dogColor": "hsl(67, 70%, 50%)",
        "burger": 175,
        "burgerColor": "hsl(194, 70%, 50%)",
        "sandwich": 96,
        "sandwichColor": "hsl(310, 70%, 50%)",
        "kebab": 89,
        "kebabColor": "hsl(346, 70%, 50%)",
        "fries": 57,
        "friesColor": "hsl(354, 70%, 50%)",
        "donut": 104,
        "donutColor": "hsl(269, 70%, 50%)"
    },
    {
        "country": "AF",
        "hot dog": 107,
        "hot dogColor": "hsl(157, 70%, 50%)",
        "burger": 29,
        "burgerColor": "hsl(8, 70%, 50%)",
        "sandwich": 191,
        "sandwichColor": "hsl(112, 70%, 50%)",
        "kebab": 3,
        "kebabColor": "hsl(341, 70%, 50%)",
        "fries": 52,
        "friesColor": "hsl(85, 70%, 50%)",
        "donut": 44,
        "donutColor": "hsl(256, 70%, 50%)"
    },
    {
        "country": "AG",
        "hot dog": 161,
        "hot dogColor": "hsl(301, 70%, 50%)",
        "burger": 155,
        "burgerColor": "hsl(91, 70%, 50%)",
        "sandwich": 155,
        "sandwichColor": "hsl(203, 70%, 50%)",
        "kebab": 55,
        "kebabColor": "hsl(213, 70%, 50%)",
        "fries": 154,
        "friesColor": "hsl(358, 70%, 50%)",
        "donut": 44,
        "donutColor": "hsl(89, 70%, 50%)"
    },
    {
        "country": "AI",
        "hot dog": 65,
        "hot dogColor": "hsl(358, 70%, 50%)",
        "burger": 185,
        "burgerColor": "hsl(130, 70%, 50%)",
        "sandwich": 184,
        "sandwichColor": "hsl(177, 70%, 50%)",
        "kebab": 119,
        "kebabColor": "hsl(114, 70%, 50%)",
        "fries": 112,
        "friesColor": "hsl(14, 70%, 50%)",
        "donut": 163,
        "donutColor": "hsl(10, 70%, 50%)"
    },
    {
        "country": "AL",
        "hot dog": 127,
        "hot dogColor": "hsl(36, 70%, 50%)",
        "burger": 77,
        "burgerColor": "hsl(86, 70%, 50%)",
        "sandwich": 134,
        "sandwichColor": "hsl(226, 70%, 50%)",
        "kebab": 160,
        "kebabColor": "hsl(295, 70%, 50%)",
        "fries": 146,
        "friesColor": "hsl(33, 70%, 50%)",
        "donut": 84,
        "donutColor": "hsl(351, 70%, 50%)"
    },
    {
        "country": "AM",
        "hot dog": 149,
        "hot dogColor": "hsl(299, 70%, 50%)",
        "burger": 42,
        "burgerColor": "hsl(192, 70%, 50%)",
        "sandwich": 170,
        "sandwichColor": "hsl(134, 70%, 50%)",
        "kebab": 186,
        "kebabColor": "hsl(81, 70%, 50%)",
        "fries": 155,
        "friesColor": "hsl(123, 70%, 50%)",
        "donut": 8,
        "donutColor": "hsl(287, 70%, 50%)"
    }
]

export default function GroupedBar() {
    return (
        <ResponsiveBar
            data={groupedData}
            keys={[
                'hot dog',
                'burger',
                'sandwich',
                'kebab',
                'fries',
                'donut'
            ]}
            indexBy="country"
            margin={{ top: 30, right: 50, bottom: 50, left: 60 }}
            padding={0.3}
            groupMode="grouped"
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            // colors={{ scheme: 'nivo' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
        />
    )
}
