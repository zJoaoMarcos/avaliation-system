import * as Dialog from "@radix-ui/react-dialog";
import { Employees } from "../../pages/Home";
import Rating from "@mui/material/Rating";
import { useForm, Controller } from "react-hook-form";
import api from "../../services/api";
import { useAuth } from "../../contexts/authProvider";

type EmployeeAvaliation = Omit<Employees, "ratings">;

type InputRatings = {
  note1: number;
  note2: number;
  note3: number;
  note4: number;
  note5: number;
  note6: number;
  note7: number;
  note8: number;
  note9: number;
};

export function RatingModal({ name, email, department }: EmployeeAvaliation) {
  const { user } = useAuth();

  const { control, handleSubmit } = useForm<InputRatings>();
  const onSubmit = (data: any) => {
    const note1 = Number(data.note1);
    const note2 = Number(data.note2);
    const note3 = Number(data.note3);
    const note4 = Number(data.note4);
    const note5 = Number(data.note5);
    const note6 = Number(data.note6);
    const note7 = Number(data.note7);
    const note8 = Number(data.note8);
    const note9 = Number(data.note9);

    api
      .post(`/employee/${email}/rating`, {
        whoVoted: user,
        sensoTime: note1,
        atitudeEmpreendedora: note2,
        autonomiaResponsabilidade: note3,
        sensoDono: note4,
        focoResultado: note5,
        focoCliente: note6,
        visaoSistemica: note9,
        inovacao: note7,
        liderancaInspiradora: note8,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Dialog.DialogPortal>
      <Dialog.DialogOverlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="w-[600px] h-[95%] flex flex-col justify-between bg-[#CCCCCC] py-6 px-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25">
        <Dialog.DialogTitle className="w-full flex flex-row items-center justify-center text-xl font-bold">
          Avaliação
        </Dialog.DialogTitle>
        <Dialog.DialogDescription className="font-semibold">
          {name}
          <span>{department}</span>
        </Dialog.DialogDescription>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-5/6 flex flex-col justify-between"
        >
          <label>Nota1:</label>
          <Controller
            name="note1"
            control={control}
            defaultValue={1}
            render={({ field }) => <Rating {...field} name="note1" />}
          />
          <label>Nota2:</label>
          <Controller
            name="note2"
            control={control}
            defaultValue={1}
            render={({ field }) => <Rating {...field} name="note1" />}
          />
          <label>Nota3:</label>
          <Controller
            name="note3"
            control={control}
            defaultValue={1}
            render={({ field }) => <Rating {...field} name="note1" />}
          />
          <label>Nota4:</label>
          <Controller
            name="note4"
            control={control}
            defaultValue={1}
            render={({ field }) => <Rating {...field} name="note1" />}
          />
          <label>Nota5:</label>
          <Controller
            name="note5"
            control={control}
            defaultValue={1}
            render={({ field }) => <Rating {...field} name="note1" />}
          />
          <label>Nota6:</label>
          <Controller
            name="note6"
            control={control}
            defaultValue={1}
            render={({ field }) => <Rating {...field} name="note1" />}
          />
          <label>Nota7:</label>
          <Controller
            name="note7"
            control={control}
            defaultValue={1}
            render={({ field }) => <Rating {...field} name="note1" />}
          />
          <label>Nota8:</label>
          <Controller
            name="note8"
            control={control}
            defaultValue={1}
            render={({ field }) => <Rating {...field} name="note1" />}
          />
          <label>Nota9:</label>
          <Controller
            name="note9"
            control={control}
            defaultValue={1}
            render={({ field }) => <Rating {...field} name="note1" />}
          />

          <button type="submit">Enviar</button>
        </form>
      </Dialog.Content>
    </Dialog.DialogPortal>
  );
}
