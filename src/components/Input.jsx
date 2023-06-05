import React from 'react'

export default function Input({ label, name, placeholder, inputChangeHandler, value, type }) {
    return (
        <div className="px-5 mb-3">
            <label htmlFor={name} className="font-semibold">
                {label}
            </label>

            <br />
            <input
                type={type}
                name={name}
                onChange={inputChangeHandler}
                value={value}
                className="bg-slate-200 w-full py-2 px-5 my-1 rounded-md "
                placeholder={placeholder}
            />
        </div>
    )
}
