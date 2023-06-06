import { USER_COLUMNS } from "@/components/table/Columns";
import UserInfoTable from "@/components/table/UserInfoTable";
import { ALL_USERS } from "@/graphql/Queries";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";

export default function Home() {
  const { data, loading, error } = useQuery(ALL_USERS);

  const columns = useMemo(() => USER_COLUMNS, []);
  const tableData = useMemo(() => data?.users?.data || [], [data]);
  return (
    <UserInfoTable
      title="User Info"
      column={columns}
      tableData={tableData}
      loading={loading}
      error={error}
    />
  );
}
