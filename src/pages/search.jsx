import Search from '@/components/search/Search'
import Head from 'next/head'
import React from 'react'

export default function search() {
    return (
        <>
            <Head>
                <title>User Diaries - Search</title>
            </Head>
            <h1 className="text-center font-bold text-2xl py-5">Search for User</h1>
            <Search />
        </>
    )
}
