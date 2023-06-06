import React from "react";
import { usePagination, useTable } from "react-table";

export default function UserInfoTable({
    tableData,
    column,
    loading,
    error,
    title,
}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        state,
    } = useTable({ columns: column, data: tableData }, usePagination);

    const { pageIndex } = state;

    if (loading)
        return <p className="text-center font-semibold text-xl py-5">Loading...</p>;
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
            <h1 className="text-center font-bold text-2xl py-5">{title}</h1>
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
            {pageOptions.length > 2 && (
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
            )}
        </>
    );
}
