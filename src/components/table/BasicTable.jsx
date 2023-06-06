import React, { useMemo } from "react";
import DUMMY from "../dummy-data.json";
import { useTable, usePagination } from "react-table";
import { COLUMNS } from "./Columns";
import { useQuery } from "@apollo/client";
import { ALL_USERS } from "@/graphql/Queries";

function BasicTable() {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => DUMMY, []);
    console.log(data);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        state,
    } = useTable({ columns, data }, usePagination);

    const { pageIndex } = state;

    return (
        <>
            <h1 className="text-center font-bold text-xl py-5">User Info</h1>
            <table
                {...getTableProps()}
                className="max-w-7xl m-auto table-auto border border-slate-500 px-5"
            >
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key className="">
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
                    {page.map((row) => {
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
            <div className="text-center space-x-5 my-5">
                <button
                    onClick={() => previousPage()}
                    className="py-2 hover:bg-violet-700 duration-300 px-5 bg-violet-500 text-white rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={!canPreviousPage}
                >
                    Prev
                </button>
                <span>
                    Page <strong>{pageIndex + 1}</strong> of{" "}
                    <strong>{pageOptions.length}</strong>
                </span>
                <button
                    onClick={() => nextPage()}
                    className="py-2 hover:bg-violet-700 duration-300 px-5 bg-violet-500 text-white rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={!canNextPage}
                >
                    Next
                </button>
            </div>
        </>
    );
}

export default BasicTable;
