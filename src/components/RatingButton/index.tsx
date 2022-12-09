import * as Dialog from "@radix-ui/react-dialog";
import { Check, Star } from "phosphor-react";
import { useState } from "react";
import { RatingModal } from "../RatingModal/index";

interface InputProps {
  department: string;
  name: string;
  email: string;
  disable?: boolean[];
}
export function RatingButton({ disable, department, name, email }: InputProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.DialogTrigger
          disabled={disable?.indexOf(true) === -1 ? false : true}
          className={
            disable?.indexOf(true) === -1
              ? "ratingButton-enable"
              : "ratingButton-disable"
          }
        >
          {disable?.indexOf(true) === -1 ? (
            <>
              <Star size={24} color="#ffd171" weight="bold" /> Avaliar
            </>
          ) : (
            <>
              <Check size={24} color="#2eff58" weight="bold" /> Avaliado
            </>
          )}
        </Dialog.DialogTrigger>
        <RatingModal
          department={department}
          name={name}
          email={email}
          setOpen={setOpen}
        />
      </Dialog.Root>
    </>
  );
}
