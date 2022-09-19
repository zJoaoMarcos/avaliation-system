import * as Dialog from "@radix-ui/react-dialog";
import { Star, PaperPlaneTilt, XCircle } from "phosphor-react";
import { RatingStars } from "../RatingStars";

export function RatingModal() {
  return (
    <Dialog.DialogPortal>
      <Dialog.DialogOverlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#CCCCCC] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.DialogTitle className="flex flex-row items-center justify-center text-center text-2xl font-black text-black">
          Avaliação
          <Star size={32} weight="fill" color="#FFFF00" />
        </Dialog.DialogTitle>
        <Dialog.DialogDescription className="text-black">
          <p className="font-semibold">João Matos</p>
          <span>Tecnologia da Informação</span>
        </Dialog.DialogDescription>
        <form className="overflow-y-hidden space-y-2">
          <RatingStars name="Atitude Empreendedora:" />
          <RatingStars name="Autonomia com Responsabilidade:" />
          <RatingStars name="Senso de Time:" />
          <RatingStars name="Senso de Domo:" />
          <RatingStars name="Foco no Resultado:" />
          <RatingStars name="Foco no Cliente:" />
          <RatingStars name="Visão Sistêmica:" />
          <RatingStars name="Inovação:" />
          <RatingStars name="Liderança Inspiradora:" />

          <footer className="w-11/12 flex flex-row justify-end items-stretch space-x-2">
            <button
              type="button"
              className="w-36 py-1 px-4 bg-[#CB2727] hover:bg-[#CB0727] font-black text-white rounded-md flex flex-row space-x-3 items-center justify-between"
            >
              <XCircle size={28} weight="bold" color="#FFFFFF" />
              Cancelar
            </button>
            <button
              type="submit"
              className="w-28 py-1 px-4 bg-[#2770CB] hover:bg-[#2740CB] font-black text-white rounded-md flex flex-row space-x-3 items-center justify-between"
            >
              <PaperPlaneTilt size={24} weight="duotone" color="#FFFFFF" />
              Enviar
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.DialogPortal>
  );
}

{
  /* <div className="w-screen h-screen py-4 flex flex-col items-center fixed backdrop-blur-sm">
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
            <label className="font-semibold">Atitude Empreendedora:</label>
            <StarsRating />
          </ul>
          <ul className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg">
            <label className="font-semibold">
              Autonomia com Responsabilidade:
            </label>
            <StarsRating />
          </ul>
          <ul className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg">
            <li className="font-semibold">Senso de Time:</li>
            <StarsRating />
          </ul>
          <ul className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg">
            <li className="font-semibold">Senso de Domo:</li>
            <StarsRating />
          </ul>
          <ul className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg">
            <li className="font-semibold">Foco no Resultado:</li>
            <StarsRating />
          </ul>
          <ul className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg">
            <li className="font-semibold">Foco no Cliente:</li>
            <StarsRating />
          </ul>
          <ul className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg">
            <li className="font-semibold">Visão Sistêmica:</li>
            <StarsRating />
          </ul>
          <ul className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg">
            <li className="font-semibold">Inovação:</li>
            <StarsRating />
          </ul>
          <ul className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg">
            <li className="font-semibold">Liderança Inspiradora:</li>
            <StarsRating />
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
    </div> */
}
