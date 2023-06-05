import Footer from "@/components/Footer";
import Search from "@/components/Search";
import BasicTable from "@/components/table/BasicTable";

export default function Home() {
  return (
    <>
      <h1 className="text-center font-bold text-2xl py-5">Search for User</h1>
      <Search />
      <BasicTable />
    </>
  );
}
