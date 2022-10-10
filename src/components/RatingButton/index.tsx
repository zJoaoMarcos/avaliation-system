import * as Dialog from "@radix-ui/react-dialog";
import { Check, Star } from "phosphor-react";
import { RatingModal } from "../../components/RatingModal";

interface InputProps {
  department: string;
  name: string;
  email: string;
  disable?: boolean;
}

export function RatingButton({ disable, department, name, email }: InputProps) {
  return (
    <>
      <Dialog.Root>
        <Dialog.DialogTrigger
          disabled={disable}
          className={
            disable === false ? "ratingButton-enable" : "ratingButton-disable"
          }
        >
          {disable === false ? (
            <>
              <Star size={26} color="#ffd171" weight="bold" /> Avaliar
            </>
          ) : (
            <>
              <Check size={26} color="#2eff58" weight="bold" /> Avaliado
            </>
          )}
        </Dialog.DialogTrigger>
        <RatingModal department={department} name={name} email={email} />
      </Dialog.Root>
    </>
  );
}
