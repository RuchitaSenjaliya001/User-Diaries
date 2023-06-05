import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='flex justify-between items-center py-4 px-5 bg-violet-100'>
            <h1 className="font-bold text-xl">USER<span className='text-violet-500'>DIARIES</span></h1>
            <ul className='flex space-x-5 cursor-pointer'>
                <Link href="/">Home</Link>
                <Link href="/new-user">New User</Link>
            </ul>
        </div>
    )
}
