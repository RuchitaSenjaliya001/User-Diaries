import React from 'react'

export default function GlobalFilter({ filter, setFilter }) {
    return (
        <>

            <input type="text" value={filter || ""} onChange={e => setFilter(e.target.value)} className="bg-slate-200 py-2 px-5 rounded-md" placeholder='Search...' />
        </>
    )
}
