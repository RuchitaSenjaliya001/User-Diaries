
import { useQuery } from "@apollo/client";
import React, { useMemo } from "react";
import { useTable } from "react-table";

export default function UserInfoTable({ query, column }) {
    const { data, loading, error } = useQuery(query);

    const columns = useMemo(() => column, []);
    const tableData = useMemo(() => data?.users?.data || [], [data]);

    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
        useTable({ columns, data: tableData });

    if (loading)
        return <p className="text-center font-semibold text-xl py-5">Loading</p>;
    if (error)
        return (
            <>
                <div className="my-3">
                    <p className="text-center font-semibold text-xl py-2">Error :(</p>
                    <p className="text-center text-lg text-red-500">{error.message}</p>
                </div>
            </>
        );

    return (
        <>
            <h1 className="text-center font-bold text-2xl py-5">User Info</h1>
            <table
                {...getTableProps()}
                className="max-w-7xl m-auto table-auto border border-slate-500 px-5"
            >
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps()}
                                    key
                                    className="bg-violet-500 py-2 text-white border border-slate-600"
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key className="even:bg-gray-200">
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            key
                                            className="border border-slate-700 p-2"
                                        >
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
