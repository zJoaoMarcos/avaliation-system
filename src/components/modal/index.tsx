import * as Dialog from "@radix-ui/react-dialog";
import { Star, PaperPlaneTilt, XCircle } from "phosphor-react";
import { FormEvent } from "react";
import { RatingStars } from "../RatingStars";

export function RatingModal() {
  async function handleRating(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <Dialog.DialogPortal>
      <Dialog.DialogOverlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="w-[480px] flex flex-col justify-around bg-[#CCCCCC] py-8 px-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25">
        <Dialog.DialogTitle className="flex flex-row items-center justify-center text-center text-2xl font-black space-x-2 text-black">
          Avaliação
          <Star size={32} weight="fill" color="#FFFF00" />
        </Dialog.DialogTitle>
        <Dialog.DialogDescription className="text-black pl-2">
          <p className="font-semibold">João Matos</p>
          <span>Tecnologia da Informação</span>
        </Dialog.DialogDescription>

        <form
          onSubmit={handleRating}
          className="h-[340px] flex flex-col justify-around space-y-2 my-4"
        >
          <div className="h-full overflow-y-scroll space-y-2">
            <RatingStars />
          </div>
          <footer className="flex flex-row mt-4 justify-end space-x-2">
            <Dialog.Close
              type="button"
              className="w-36 py-1 px-4 bg-[#CB2727] hover:bg-[#CB0727] font-black text-white rounded-md flex flex-row space-x-3 items-center justify-between"
            >
              <XCircle size={28} weight="bold" color="#FFFFFF" />
              Cancelar
            </Dialog.Close>
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
