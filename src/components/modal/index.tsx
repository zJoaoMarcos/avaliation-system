import { Star, PaperPlaneTilt, XCircle } from "phosphor-react";

export function Avaliation({ stateModal }: any) {
  return (
    <div className="w-screen h-screen py-4 flex flex-col items-center fixed backdrop-blur-sm">
      <div className="w-8/12 md:w-2/5 h-full p-2 flex flex-col justify-around space-y-5 items-center bg-zinc-200 rounded-lg">
        <header className="flex flex-row items-center justify-center space-x-3">
          <h1 className="font-black text-2xl text-black">Avaliação</h1>{" "}
          <Star size={32} weight="fill" color="#FFFF00" />
        </header>

        <section className="w-11/12 flex flex-col">
          <h3 className="text-lg font-black">João Matos</h3>
          <p className="text-lg font-medium">Tecnologia da Informação</p>
        </section>

        <main className="w-11/12 overflow-y-auto space-y-2">
          <ul className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg">
            <li className="font-semibold">Atitude Empreendedora:</li>
            <Star size={24} weight="bold" color="#000000" />
          </ul>
          <ul className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg">
            <li className="font-semibold">Autonomia com Responsabilidade:</li>
            <Star size={24} weight="bold" color="#000000" />
          </ul>
          <ul className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg">
            <li className="font-semibold">Senso de Time:</li>
            <Star size={24} weight="bold" color="#000000" />
          </ul>
          <ul className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg">
            <li className="font-semibold">Senso de Domo:</li>
            <Star size={24} weight="bold" color="#000000" />
          </ul>
          <ul className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg">
            <li className="font-semibold">Foco no Resultado:</li>
            <Star size={24} weight="bold" color="#000000" />
          </ul>
          <ul className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg">
            <li className="font-semibold">Foco no Cliente:</li>
            <Star size={24} weight="bold" color="#000000" />
          </ul>
          <ul className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg">
            <li className="font-semibold">Visão Sistêmica:</li>
            <Star size={24} weight="bold" color="#000000" />
          </ul>
          <ul className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg">
            <li className="font-semibold">Inovação:</li>
            <Star size={24} weight="bold" color="#000000" />
          </ul>
          <ul className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg">
            <li className="font-semibold">Liderança Inspiradora:</li>
            <Star size={24} weight="bold" color="#000000" />
          </ul>
        </main>

        <section className="w-11/12 flex flex-row justify-end items-stretch space-x-2">
          <button
            onClick={() => stateModal(false)}
            className="w-36 py-1 px-4 bg-[#CB2727] hover:bg-[#CB0727] font-black text-white rounded-md flex flex-row space-x-3 items-center justify-between"
          >
            <XCircle size={28} weight="bold" color="#FFFFFF" />
            Cancelar
          </button>
          <button className="w-28 py-1 px-4 bg-[#2770CB] hover:bg-[#2740CB] font-black text-white rounded-md flex flex-row space-x-3 items-center justify-between">
            <PaperPlaneTilt size={24} weight="duotone" color="#FFFFFF" />
            Enviar
          </button>
        </section>
      </div>
    </div>
  );
}
