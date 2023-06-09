import { ResponsiveCalendar } from "@nivo/calendar";
import React from "react";

const calendarData = [
    {
        value: 53,
        day: "2016-06-23",
    },
    {
        value: 166,
        day: "2018-07-15",
    },
    {
        value: 335,
        day: "2015-09-06",
    },
    {
        value: 257,
        day: "2017-04-25",
    },
    {
        value: 280,
        day: "2016-09-05",
    },
    {
        value: 392,
        day: "2015-04-29",
    },
    {
        value: 89,
        day: "2017-03-14",
    },
    {
        value: 348,
        day: "2017-03-10",
    },
    {
        value: 42,
        day: "2018-06-08",
    },
    {
        value: 240,
        day: "2017-08-08",
    },
    {
        value: 69,
        day: "2017-09-27",
    },
    {
        value: 352,
        day: "2018-06-30",
    },
    {
        value: 92,
        day: "2016-10-12",
    },
    {
        value: 157,
        day: "2015-10-24",
    },
    {
        value: 189,
        day: "2018-02-03",
    },
    {
        value: 8,
        day: "2017-07-19",
    },
    {
        value: 397,
        day: "2015-10-10",
    },
    {
        value: 118,
        day: "2017-06-11",
    },
    {
        value: 323,
        day: "2017-07-12",
    },
    {
        value: 197,
        day: "2018-05-07",
    },
    {
        value: 53,
        day: "2018-01-21",
    },
    {
        value: 238,
        day: "2016-07-08",
    },
    {
        value: 308,
        day: "2018-07-27",
    },
    {
        value: 287,
        day: "2015-04-18",
    },
    {
        value: 14,
        day: "2015-11-13",
    },
    {
        value: 81,
        day: "2017-06-28",
    },
    {
        value: 119,
        day: "2015-09-13",
    },
    {
        value: 99,
        day: "2015-11-07",
    },
    {
        value: 101,
        day: "2015-07-07",
    },
    {
        value: 226,
        day: "2016-01-09",
    },
    {
        value: 52,
        day: "2016-03-10",
    },
    {
        value: 248,
        day: "2017-11-07",
    },
    {
        value: 104,
        day: "2016-01-19",
    },
    {
        value: 159,
        day: "2017-04-09",
    },
    {
        value: 361,
        day: "2017-04-16",
    },
    {
        value: 68,
        day: "2017-09-24",
    },
    {
        value: 31,
        day: "2017-06-21",
    },
    {
        value: 184,
        day: "2017-09-23",
    },
    {
        value: 125,
        day: "2017-04-10",
    },
    {
        value: 214,
        day: "2015-04-28",
    },
    {
        value: 36,
        day: "2015-05-28",
    },
    {
        value: 377,
        day: "2017-08-28",
    },
    {
        value: 68,
        day: "2016-06-01",
    },
    {
        value: 203,
        day: "2017-11-01",
    },
    {
        value: 120,
        day: "2017-03-09",
    },
    {
        value: 21,
        day: "2016-05-13",
    },
    {
        value: 387,
        day: "2018-04-12",
    },
    {
        value: 223,
        day: "2017-02-10",
    },
    {
        value: 11,
        day: "2016-09-12",
    },
    {
        value: 356,
        day: "2015-06-19",
    },
    {
        value: 171,
        day: "2018-03-24",
    },
    {
        value: 377,
        day: "2015-09-09",
    },
    {
        value: 176,
        day: "2015-04-12",
    },
    {
        value: 185,
        day: "2016-07-21",
    },
    {
        value: 109,
        day: "2017-03-03",
    },
    {
        value: 247,
        day: "2018-02-11",
    },
    {
        value: 121,
        day: "2017-07-31",
    },
    {
        value: 294,
        day: "2016-09-26",
    },
    {
        value: 305,
        day: "2017-09-29",
    },
    {
        value: 55,
        day: "2016-05-21",
    },
    {
        value: 124,
        day: "2018-07-09",
    },
    {
        value: 376,
        day: "2015-09-11",
    },
    {
        value: 141,
        day: "2016-10-23",
    },
    {
        value: 394,
        day: "2018-04-11",
    },
    {
        value: 7,
        day: "2017-12-30",
    },
    {
        value: 292,
        day: "2018-02-21",
    },
    {
        value: 390,
        day: "2016-03-02",
    },
    {
        value: 122,
        day: "2015-06-28",
    },
    {
        value: 246,
        day: "2016-05-01",
    },
    {
        value: 313,
        day: "2016-07-28",
    },
    {
        value: 300,
        day: "2016-06-10",
    },
    {
        value: 301,
        day: "2015-12-15",
    },
    {
        value: 382,
        day: "2015-06-11",
    },
    {
        value: 284,
        day: "2017-07-01",
    },
    {
        value: 78,
        day: "2016-07-06",
    },
    {
        value: 5,
        day: "2015-10-13",
    },
    {
        value: 91,
        day: "2016-03-06",
    },
    {
        value: 324,
        day: "2015-05-13",
    },
    {
        value: 325,
        day: "2017-09-01",
    },
    {
        value: 17,
        day: "2015-11-23",
    },
    {
        value: 135,
        day: "2015-05-11",
    },
    {
        value: 346,
        day: "2016-10-30",
    },
    {
        value: 50,
        day: "2015-12-05",
    },
    {
        value: 105,
        day: "2017-08-09",
    },
    {
        value: 148,
        day: "2015-08-04",
    },
    {
        value: 329,
        day: "2016-05-07",
    },
    {
        value: 352,
        day: "2015-08-28",
    },
    {
        value: 338,
        day: "2017-10-27",
    },
    {
        value: 321,
        day: "2018-04-23",
    },
    {
        value: 245,
        day: "2016-04-01",
    },
    {
        value: 130,
        day: "2017-04-29",
    },
    {
        value: 145,
        day: "2018-04-07",
    },
    {
        value: 164,
        day: "2017-10-01",
    },
    {
        value: 31,
        day: "2017-05-26",
    },
    {
        value: 210,
        day: "2016-10-28",
    },
    {
        value: 376,
        day: "2017-09-16",
    },
    {
        value: 336,
        day: "2016-02-13",
    },
    {
        value: 247,
        day: "2015-06-25",
    },
    {
        value: 88,
        day: "2018-08-01",
    },
    {
        value: 351,
        day: "2016-09-17",
    },
    {
        value: 203,
        day: "2015-11-02",
    },
    {
        value: 274,
        day: "2018-02-05",
    },
    {
        value: 243,
        day: "2018-01-19",
    },
    {
        value: 11,
        day: "2015-11-15",
    },
    {
        value: 245,
        day: "2017-05-18",
    },
    {
        value: 375,
        day: "2017-02-04",
    },
    {
        value: 15,
        day: "2017-03-15",
    },
    {
        value: 81,
        day: "2017-03-30",
    },
    {
        value: 132,
        day: "2017-04-12",
    },
    {
        value: 76,
        day: "2018-05-16",
    },
    {
        value: 145,
        day: "2018-05-13",
    },
    {
        value: 342,
        day: "2017-10-07",
    },
    {
        value: 396,
        day: "2017-12-26",
    },
    {
        value: 29,
        day: "2016-05-31",
    },
    {
        value: 391,
        day: "2017-02-21",
    },
    {
        value: 348,
        day: "2016-03-27",
    },
    {
        value: 192,
        day: "2016-04-03",
    },
    {
        value: 5,
        day: "2018-05-01",
    },
    {
        value: 112,
        day: "2018-07-07",
    },
    {
        value: 297,
        day: "2017-08-29",
    },
    {
        value: 337,
        day: "2018-03-17",
    },
    {
        value: 10,
        day: "2018-07-03",
    },
    {
        value: 93,
        day: "2015-11-08",
    },
    {
        value: 238,
        day: "2015-07-18",
    },
    {
        value: 94,
        day: "2017-04-19",
    },
    {
        value: 289,
        day: "2017-01-02",
    },
    {
        value: 265,
        day: "2016-10-30",
    },
    {
        value: 323,
        day: "2015-08-11",
    },
    {
        value: 123,
        day: "2017-02-16",
    },
    {
        value: 164,
        day: "2017-02-03",
    },
    {
        value: 3,
        day: "2017-03-04",
    },
    {
        value: 256,
        day: "2017-03-31",
    },
    {
        value: 368,
        day: "2017-06-07",
    },
    {
        value: 41,
        day: "2017-05-05",
    },
    {
        value: 376,
        day: "2018-02-01",
    },
    {
        value: 126,
        day: "2016-03-27",
    },
    {
        value: 48,
        day: "2017-09-04",
    },
    {
        value: 361,
        day: "2017-08-12",
    },
    {
        value: 353,
        day: "2015-05-02",
    },
    {
        value: 334,
        day: "2015-05-10",
    },
    {
        value: 285,
        day: "2018-03-09",
    },
    {
        value: 397,
        day: "2018-02-13",
    },
    {
        value: 65,
        day: "2015-10-24",
    },
    {
        value: 66,
        day: "2015-05-19",
    },
    {
        value: 143,
        day: "2018-07-15",
    },
    {
        value: 194,
        day: "2015-11-01",
    },
    {
        value: 253,
        day: "2017-09-22",
    },
    {
        value: 131,
        day: "2017-08-11",
    },
    {
        value: 279,
        day: "2016-03-18",
    },
    {
        value: 166,
        day: "2015-04-12",
    },
    {
        value: 87,
        day: "2017-01-25",
    },
    {
        value: 350,
        day: "2017-06-13",
    },
    {
        value: 117,
        day: "2015-04-23",
    },
    {
        value: 358,
        day: "2018-05-19",
    },
    {
        value: 73,
        day: "2017-04-07",
    },
    {
        value: 207,
        day: "2017-01-19",
    },
    {
        value: 299,
        day: "2015-07-26",
    },
    {
        value: 183,
        day: "2018-05-07",
    },
    {
        value: 378,
        day: "2018-03-30",
    },
    {
        value: 399,
        day: "2015-08-26",
    },
    {
        value: 41,
        day: "2015-12-19",
    },
    {
        value: 31,
        day: "2016-03-03",
    },
    {
        value: 145,
        day: "2017-09-15",
    },
    {
        value: 340,
        day: "2015-08-20",
    },
    {
        value: 56,
        day: "2017-09-19",
    },
    {
        value: 242,
        day: "2017-01-06",
    },
    {
        value: 242,
        day: "2016-01-12",
    },
    {
        value: 230,
        day: "2017-10-02",
    },
    {
        value: 150,
        day: "2018-07-21",
    },
    {
        value: 138,
        day: "2018-07-20",
    },
    {
        value: 46,
        day: "2018-08-10",
    },
    {
        value: 141,
        day: "2015-07-08",
    },
    {
        value: 142,
        day: "2017-12-13",
    },
    {
        value: 135,
        day: "2017-06-24",
    },
    {
        value: 264,
        day: "2016-11-23",
    },
    {
        value: 332,
        day: "2016-12-31",
    },
    {
        value: 207,
        day: "2016-11-22",
    },
    {
        value: 360,
        day: "2017-04-08",
    },
    {
        value: 318,
        day: "2017-01-05",
    },
    {
        value: 282,
        day: "2017-06-17",
    },
    {
        value: 49,
        day: "2015-04-02",
    },
    {
        value: 308,
        day: "2017-04-14",
    },
    {
        value: 153,
        day: "2017-10-12",
    },
    {
        value: 77,
        day: "2016-02-20",
    },
    {
        value: 169,
        day: "2017-11-02",
    },
    {
        value: 205,
        day: "2016-06-06",
    },
    {
        value: 175,
        day: "2016-10-20",
    },
    {
        value: 114,
        day: "2017-02-02",
    },
    {
        value: 244,
        day: "2016-08-05",
    },
    {
        value: 1,
        day: "2015-06-15",
    },
    {
        value: 73,
        day: "2016-08-03",
    },
    {
        value: 192,
        day: "2016-03-15",
    },
    {
        value: 363,
        day: "2016-06-02",
    },
    {
        value: 54,
        day: "2017-10-19",
    },
    {
        value: 181,
        day: "2016-11-25",
    },
    {
        value: 304,
        day: "2018-06-24",
    },
    {
        value: 148,
        day: "2016-11-09",
    },
    {
        value: 24,
        day: "2018-06-25",
    },
    {
        value: 296,
        day: "2017-09-10",
    },
    {
        value: 59,
        day: "2015-11-05",
    },
    {
        value: 356,
        day: "2017-04-11",
    },
    {
        value: 110,
        day: "2017-12-07",
    },
    {
        value: 42,
        day: "2018-07-27",
    },
    {
        value: 106,
        day: "2015-07-04",
    },
    {
        value: 104,
        day: "2017-02-22",
    },
    {
        value: 26,
        day: "2018-04-29",
    },
    {
        value: 50,
        day: "2017-04-26",
    },
    {
        value: 330,
        day: "2017-02-05",
    },
];

export default function CalenderChart() {
    return (
        <>
            <h1 className="text-center font-bold text-xl py-3">
                React Responsive Calender chart
            </h1>
            <ResponsiveCalendar
                data={calendarData}
                from="2015-03-01"
                to="2016-07-12"
                emptyColor="#eeeeee"
                colors={["#ccdeff", "#70a4ff", "#2c71e8", "#2a4b84"]}
                margin={{ top: 0, right: 20, bottom: 40, left: 40 }}
                yearSpacing={40}
                monthBorderColor="#ffffff"
                dayBorderWidth={2}
                dayBorderColor="#ffffff"
                legends={[
                    {
                        anchor: "bottom-right",
                        direction: "row",
                        itemCount: 4,
                        padding: 50,
                        itemWidth: 42,
                        itemHeight: 36,
                        itemsSpacing: 14,
                        itemDirection: "right-to-left",
                    },
                ]}
            />
        </>
    );
}
