import { MagnifyingGlass, CheckCircle, Star } from "phosphor-react";
import { useState } from "react";
import { Avaliation } from "../../components/modal/index";

export function Home() {
  const [Modal, setModal] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col items-center px-72 bg-zinc-500">
      {Modal && <Avaliation stateModal={setModal} />}
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
            <th className="p-3 text-lg font-semibold tracking-wide">Name</th>
            <th className="p-3 text-lg font-semibold tracking-wide">
              Departameto
            </th>
          </thead>
          <tbody>
            <td className="p-3 text-center text-base">João Matos</td>
            <td className="p-3 text-center text-base">
              Tecnologia da Informação
            </td>
            <td>
              <button
                onClick={() => setModal(true)}
                className="w-36 py-1 px-4 bg-zinc-600 hover:bg-zinc-700 font-black text-white rounded-md flex flex-row space-x-3 items-center justify-start"
              >
                <Star size={28} weight="fill" color="#FFFF00" />
                <p>Avaliar</p>
              </button>
            </td>
          </tbody>
          <tbody>
            <td className="p-3 text-center text-base">Pedro Paizam</td>
            <td className="p-3 text-center text-base">
              Tecnologia da Informação
            </td>
            <td>
              <button className="w-36 py-1 px-4 bg-zinc-600 hover:bg-zinc-700 font-black text-white rounded-md flex flex-row space-x-3 items-center justify-start">
                <CheckCircle size={28} weight="fill" color="#00f597" />
                <p>Avaliado</p>
              </button>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
}
