import Search from "@/components/search/Search";
import BasicTable from "@/components/table/BasicTable";
import { USER_COLUMNS } from "@/components/table/Columns";
import UserInfoTable from "@/components/table/UserInfoTable";
import { ALL_USERS } from "@/graphql/Queries";

export default function Home() {
  return (
    <>
      <UserInfoTable query={ALL_USERS} column={USER_COLUMNS} />
      {/* <BasicTable /> */}
    </>
  );
}
