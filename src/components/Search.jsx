import React, { useState } from 'react'
import UserDetail from './UserDetail';
import { useLazyQuery } from '@apollo/client'
import { GET_USER } from '@/graphql/Queries';

export default function Search() {
    const [searchedUser, setSearchedUser] = useState("");
    const [fetchUser, { data, loading, error }] = useLazyQuery(GET_USER, {
        variables: {
            id: searchedUser,
        },
    });

    const searchChangeHandler = (e) => {
        setSearchedUser(e.target.value);
    };
    return (
        <div className="">

            <div className="text-center">
                <input
                    type="text"
                    name="city"
                    id="city"
                    className="bg-slate-200 py-2 px-5 rounded-l-md"
                    placeholder="Enter user id..."
                    onChange={searchChangeHandler}
                />
                <button
                    type="submit"
                    className="py-2 hover:bg-violet-700 duration-300 px-5 bg-violet-500 text-white rounded-r-md"
                    onClick={() => fetchUser()}
                >
                    Search
                </button>
            </div>

            {/* {data === undefined && <p className='text-center pt-5'>No user found</p>} */}
            {loading && <p className="text-center pt-5"> Loading...</p>}

            {error && (
                <p className="text-center text-red-500 font-bold text-xl pt-5">
                    Error :(
                </p>
            )}

            {data !== undefined && <UserDetail data={data} />}

        </div>
    )
}
