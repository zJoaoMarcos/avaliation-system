import { useAuth } from "../../contexts/authProvider";
import { useFetch } from "../../hooks/useFetch";
import { MagnifyingGlass } from "phosphor-react";
import { RatingButton } from "../../components/RatingButton";

export interface Employees {
  name: string;
  email: string;
  department: string;
  ratings: [
    {
      id: string;
      whoVoted: string;
    }
  ];
}

export function Home() {
  const { user } = useAuth();

  const { data: repositories } = useFetch<Employees[]>(
    `${import.meta.env.VITE_API_AVALIATION_SYSTEM_URL}employees/${user}`
  );

  function validateWasVoted(employees: Employees): boolean {
    const wasVoted = employees.ratings.map((rating): boolean => {
      if (rating.whoVoted.indexOf(`${user}`)) {
        return true;
      }
      return false;
    });

    return wasVoted[0];
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center px-72 bg-[#DBDBDB]">
      <header className="w-full flex flex-row mt-14 mb-5">
        <h2 className="pl-6 text-5xl font-bold text-black text-start">
          Funcionários
        </h2>
      </header>

      <div className="w-full flex flex-col py-6 px-4 items-center gap-3 ">
        <div className="w-full flex flex-row py-2 px-4 space-x-2 rounded-lg bg-white shadow-md shadow-black/25 ">
          <a href="">
            <MagnifyingGlass size={30} />
          </a>
          <input
            type="text"
            placeholder="Pesquisar"
            className="text-xl font-normal focus:outline-none placeholder:font-normal placeholder:text-black placeholder:focus:opacity-25"
          />
        </div>

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
              {repositories?.map((employee) => (
                <tr key={employee.email}>
                  <td className="font-semibold text-center text-base p-6">
                    {employee.name}
                  </td>
                  <td className="font-semibold text-center text-base p-6">
                    {employee.department}
                  </td>
                  <td>
                    <RatingButton
                      disable={validateWasVoted(employee)}
                      department={employee.department}
                      name={employee.name}
                      email={employee.email}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
