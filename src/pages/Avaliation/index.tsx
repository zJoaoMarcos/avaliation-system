import { Header } from "../../components/Header/index";
import { SearchButton } from "../../components/Search";
import { TableRowEmployee } from "../../components/TableRowEmployee";
import { useRating } from "../../hooks/useRating";

export function Avaliation() {
  const { employees, search, filteredEmployees } = useRating();

  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col items-center bg-[#DBDBDB]">
      <Header />

      <div className="w-[480px] sm:w-[820px] flex flex-col py-6 px-4 items-center gap-3 ">
        <SearchButton />
        <div className="w-full py-4 bg-white rounded-lg shadow-md shadow-black/25">
          <table className="w-full">
            <thead className="border-b-2 border-separate ">
              <tr>
                <th></th>
                <th className="p-3 text-left text-sm">Nome</th>
                <th className="p-3 text-sm">Departamento</th>
              </tr>
            </thead>
            {search.length > 0 ? (
              <tbody>
                {filteredEmployees.map((employee) => {
                  return (
                    <TableRowEmployee key={employee.name} employee={employee} />
                  );
                })}
              </tbody>
            ) : (
              <tbody>
                {employees.map((employee) => {
                  return (
                    <TableRowEmployee key={employee.name} employee={employee} />
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
