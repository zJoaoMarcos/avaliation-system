import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchButton } from "../../components/SearchButton";
import { TableRowEmployee } from "../../components/TableRowEmployee";

export interface Employee {
  name: string;
  email: string;
  department: string;
  ratings: [
    {
      whoVoted: string;
    }
  ];
}

export function Home() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_API_AVALIATION_SYSTEM_URL
      }employees/pedro.paizam@construtorapatriani.com.br`
    )
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  console.log(employees);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center px-72 bg-[#DBDBDB]">
      <Header />

      <div className="w-full flex flex-col py-6 px-4 items-center gap-3 ">
        <SearchButton />

        <div className="w-full py-4 bg-white rounded-lg shadow-md shadow-black/25">
          <table className="w-full ">
            <thead className="border-b-2 border-separate ">
              <tr>
                <th className="p-3 text-lg font-bold tracking-wide">Name</th>
                <th className="p-3 text-lg font-bold tracking-wide">
                  Departameto
                </th>
              </tr>
            </thead>
            <tbody>
              {employees?.map((employee) => {
                return (
                  <TableRowEmployee key={employee.name} employee={employee} />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
