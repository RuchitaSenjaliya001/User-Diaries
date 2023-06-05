import React from "react";

export default function UserDetail({ data }) {
    console.log(data);
    return (
        <>
            {data.user.name !== null ? (
                <div className="max-w-5xl m-auto bg-violet-100 mt-5 p-5 rounded-md">
                    <h1 className="font-bold py-2 text-center uppercase text-xl">
                        {data.user.name}
                    </h1>
                    <div className="">
                        <div className="font-bold py-2">
                            EMAIL: <span className="font-normal">{data.user.email}</span>
                        </div>
                        <div className="font-bold py-2">
                            ADDRESS: <span className="font-normal">
                                {data.user.address?.suite}, {data.user.address?.street},
                                {data.user.address?.city}, {data.user.address?.zipcode}
                            </span>
                        </div>
                        <div className="font-bold py-2">
                            COMPANY: <span className="font-normal">{data.user.company.name}</span>
                        </div>
                        <div className="font-bold py-2">
                            WEBSITE: <span className="font-normal">{data.user.website}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center py-4">No user found with this id.</p>
            )}
        </>
    );
}
