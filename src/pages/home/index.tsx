import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlass } from "phosphor-react";
import { RatingModal } from "../../components/RatingModal";
import { useFetch } from "../../hooks/useFetch";

export interface Employees {
  name: string;
  email: string;
  department: string;
  ratings: string[] | number[];
}

export function Home() {
  const { data: repositories, error } = useFetch<Employees[]>(
    `${import.meta.env.VITE_API_AVALIATION_SYSTEM_URL}employees/${
      import.meta.env.VITE_USER
    }`
  );

  return (
    <div className="w-screen h-screen flex flex-col items-center px-72 bg-zinc-500">
      <header className="w-full flex flex-row mt-14 mb-5">
        <h2 className="pl-6 text-5xl font-black text-white text-start">
          Funcionários
        </h2>
      </header>
      <div className="w-full flex flex-col py-5 px-4 items-center gap-2 bg-gradient-to-b from-zinc-400 via-zinc-400  to-zinc-600 rounded-lg">
        <div className="w-full flex flex-row py-2 px-4 space-x-2 rounded-lg bg-zinc-200">
          <a href="">
            <MagnifyingGlass size={30} />
          </a>
          <input
            type="text"
            placeholder="Pesquisar"
            className="text-xl font-medium focus:outline-none placeholder:font-bold placeholder:text-black placeholder:focus:opacity-25 bg-zinc-200"
          />
        </div>

        <table className="w-full bg-zinc-200 rounded-lg">
          <thead className="">
            <tr>
              <th className="p-3 text-lg font-semibold tracking-wide">Name</th>
              <th className="p-3 text-lg font-semibold tracking-wide">
                Departameto
              </th>
            </tr>
          </thead>
          <tbody>
            {repositories?.map((employee) => (
              <tr key={employee.email}>
                <td className="p-3 text-center text-base">{employee.name}</td>
                <td className="p-3 text-center text-base">
                  {employee.department}
                </td>
                <td>
                  <Dialog.Root>
                    <Dialog.DialogTrigger className="w-36 py-1 px-5 bg-zinc-600 hover:bg-zinc-700 font-black text-white rounded-md gap-2 flex flex-row items-center justify-start">
                      Avaliar
                    </Dialog.DialogTrigger>
                    <RatingModal
                      department={employee.department}
                      name={employee.name}
                      email={employee.email}
                    />
                  </Dialog.Root>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
