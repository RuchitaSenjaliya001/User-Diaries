import { POST_COLUMNS } from '@/components/table/Columns';
import UserInfoTable from '@/components/table/UserInfoTable';
import { ALL_POSTS } from '@/graphql/Queries';
import { useQuery } from '@apollo/client';
import React, { useMemo } from 'react'

export default function Posts() {
    const { data, loading, error } = useQuery(ALL_POSTS);

    const columns = useMemo(() => POST_COLUMNS, []);
    const tableData = useMemo(() => data?.posts?.data || [], [data]);
    return (
        <UserInfoTable column={columns} tableData={tableData} loading={loading} error={error} title="Posts Info" />
    )
}
