import Link from "next/link";
import React from "react";

export default function Error() {
    return (
        <div className="flex flex-col justify-center items-center h-[92vh] bg-red-200">
            <h1 className="text-red-600 text-6xl font-bold">404</h1>
            <p className="font-semibold text-lg">Something went wrong.</p>
            <Link href="/">
                <button className="py-2 hover:bg-violet-700 duration-300 px-5 bg-violet-500 text-white rounded-md my-3">
                    Home
                </button>
            </Link>
        </div>
    );
}
