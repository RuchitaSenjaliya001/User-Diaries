import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function SelectDate() {
    const [startDate, setStartDate] = useState(new Date())
    return (
        <>
            <h1 className="text-center font-bold text-2xl py-5">
                Date Picker
            </h1>
            <div className="flex justify-center max-w-sm m-auto">
                <DatePicker className="bg-slate-200 py-2 px-5 rounded-md w-full" selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect />
            </div>
        </>
    )
}
