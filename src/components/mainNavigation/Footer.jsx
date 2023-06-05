import React from "react";

export default function Footer({ mode }) {
    return (
        <div className={`bg-violet-500 py-4 text-white text-center text-lg mt-5`}>
            <p>
                &#169; 2023. All rights are reserved
                <span className="font-bold" > USERDIARIES</span>
            </p>
        </div>
    );
}