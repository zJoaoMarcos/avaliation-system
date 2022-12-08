import { AnimationLoading } from "../../components/AnimationLoading";
import { Header } from "../../components/Header/index";
import { SearchButton } from "../../components/Search";
import { TableRowEmployee } from "../../components/TableRowEmployee";
import { useRating } from "../../hooks/useRating";

export function Avaliation() {
  const { employees, search, filteredEmployees, isLoading } = useRating();

  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col items-center bg-[#DBDBDB]">
      <Header />

      <div className="w-screen md:w-3/4 flex flex-col py-6 px-4 items-center gap-3 ">
        <SearchButton />
        <div className="w-full py-4 bg-white rounded-lg shadow-md shadow-black/25">
          {isLoading && <AnimationLoading />}
          <table className="w-full">
            {/* <thead className="border-b-2 border-separate hidden ">
              <tr>
              <th></th>
              <th className="p-3 text-left text-sm">Nome</th>
              <th className="p-3 hidden sm:block text-sm">Departamento</th>
              </tr>
            </thead> */}
            <tbody className="">
              {search.length > 0 ? (
                <>
                  {filteredEmployees.map((employee) => {
                    return (
                      <TableRowEmployee
                        key={employee.name}
                        employee={employee}
                      />
                    );
                  })}
                </>
              ) : (
                <>
                  {employees.map((employee) => {
                    return (
                      <TableRowEmployee
                        key={employee.name}
                        employee={employee}
                      />
                    );
                  })}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
