import { Header } from "../../components/Header/index";
import { SearchButton } from "../../components/Search";
import { TableEmployee } from "../../components/TableEmployee";

export function Avaliation() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col items-center bg-[#DBDBDB]">
      <Header />

      <div className="w-screen md:w-3/4 flex flex-col py-6 px-4 items-center gap-3 ">
        <SearchButton />

        <TableEmployee />
      </div>
    </div>
  );
}
