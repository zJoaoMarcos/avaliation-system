import * as Dialog from "@radix-ui/react-dialog";
import { Star, PaperPlaneTilt, XCircle } from "phosphor-react";
import { FormEvent } from "react";
import { Employees } from "../../pages/Home";
import { RatingStars } from "../RatingStars";

type EmployeeAvaliation = Omit<Employees, "ratings">;

export function RatingModal({ name, email, department }: EmployeeAvaliation) {
  async function handleRating(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <Dialog.DialogPortal>
      <Dialog.DialogOverlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="w-[600px] h-[95%] flex flex-col justify-between bg-[#CCCCCC] py-6 px-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25">
        <Dialog.DialogTitle className="w-full flex flex-row items-center justify-center text-xl font-bold">
          Avaliação
          <Star size={30} weight="bold" color="#FFFF00" className="ml-2" />
        </Dialog.DialogTitle>
        <Dialog.DialogDescription>
          <p className="font-semibold">{name}</p>
          <span>{department}</span>
        </Dialog.DialogDescription>

        <form
          onSubmit={handleRating}
          className="h-5/6 flex flex-col justify-between"
        >
          <div className="h-full overflow-y-auto space-y-2">
            <RatingStars
              id="atitudeEmpreendedora"
              name="Atitude Empreendedora"
            />
            <RatingStars
              id="autonomiaResponsabilidade"
              name="Autonomia com Responsabilidade"
            />
            <RatingStars id="sensoTime" name="Senso de Time" />
            <RatingStars id="sensoDono" name="Senso de Dono" />
            <RatingStars id="focoResultado" name="Foco no Resultado" />
            <RatingStars id="focoCliente" name="Foco no Cliente" />
            <RatingStars id="visaoSistemica" name="Visão Sistêmica" />
            <RatingStars id="inovacao" name="Inovação" />
            <RatingStars
              id="liderancaInspiradora"
              name="Liderança Inspiradora"
            />
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
