import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlass, Star } from "phosphor-react";
import { RatingModal } from "../../components/RatingModal";
import { useFetch } from "../../hooks/useFetch";
import { useAuth } from "../../contexts/authProvider";

export interface Employees {
  name: string;
  email: string;
  department: string;
  ratings: Ratings[] | [];
}

export interface Ratings {
  id: string;
  whoVoted: string;
}

export function Home() {
  const { user } = useAuth();

  const { data: repositories } = useFetch<Employees[]>(
    `${import.meta.env.VITE_API_AVALIATION_SYSTEM_URL}employees/${user}`
  );

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
              {repositories?.map(({ email, name, department, ratings }) => (
                <tr key={email}>
                  <td className="font-semibold text-center text-base p-6">
                    {name}
                  </td>
                  <td className="font-semibold text-center text-base p-6">
                    {department}
                  </td>
                  <td>
                    {ratings.map((rating, id) => {
                      if (
                        rating.whoVoted ===
                        "joao.matos@construtorapatriani.com.br"
                      ) {
                        return <button key={rating.whoVoted}>Dissable</button>;
                      }
                      return (
                        <Dialog.Root>
                          <Dialog.DialogTrigger className="w-36 py-1.5 px-6 bg-[#4F46BB] hover:bg-[#292194] font-medium text-white rounded-full gap-2 flex flex-row items-center justify-start m-4 shadow-black/25 shadow-md">
                            <Star size={26} color="#ffd171" weight="bold" />
                            Avaliar
                          </Dialog.DialogTrigger>
                          <RatingModal
                            department={department}
                            name={name}
                            email={email}
                          />
                        </Dialog.Root>
                      );
                    })}
                  </td>
                  {/* <td>
                    <Dialog.Root>
                      <Dialog.DialogTrigger className="w-36 py-1.5 px-6 bg-[#4F46BB] hover:bg-[#292194] font-medium text-white rounded-full gap-2 flex flex-row items-center justify-start m-4 shadow-black/25 shadow-md">
                        <Star size={26} color="#ffd171" weight="bold" />
                        Avaliar
                      </Dialog.DialogTrigger>
                      <RatingModal
                        department={department}
                        name={name}
                        email={email}
                      />
                    </Dialog.Root>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
