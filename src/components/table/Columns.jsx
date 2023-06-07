import { EditableCell } from "./Editable";

export const USER_COLUMNS = [
    {
        Header: "ID",
        accessor: "id",
    },
    {
        Header: "NAME",
        accessor: "name",
        Cell: EditableCell,
    },
    {
        Header: "USERNAME",
        accessor: "username",
        Cell: EditableCell,
    },
    {
        Header: "EMAIL",
        accessor: "email",
        Cell: EditableCell,
    },

    {
        Header: "COMPANY",
        accessor: "company.name",
    },
    {
        Header: "WEBSITE",
        accessor: "website",
    },
    {
        Header: "PHONE",
        accessor: "phone",
    },

];

export const POST_COLUMNS = [
    {
        Header: "ID",
        accessor: "id",
    },
    {
        Header: "TITLE",
        accessor: "title",
    },
    {
        Header: "BODY",
        accessor: "body",
    },
    {
        Header: "USER",
        accessor: "user.name",
    },
]
