import * as Dialog from "@radix-ui/react-dialog";
import { Employees } from "../../pages/Home";
import Rating from "@mui/material/Rating";
import { useForm, Controller } from "react-hook-form";
import api from "../../services/api";
import { useAuth } from "../../contexts/authProvider";
import { Star } from "phosphor-react";

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
        note1: note1,
        note2: note2,
        note3: note3,
        note4: note4,
        note5: note5,
        note6: note6,
        note7: note7,
        note8: note8,
        note9: note9,
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
      <Dialog.Content className="w-[700px] h-[95%] flex flex-col justify-between bg-white py-6 px-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25">
        <Dialog.DialogTitle className="w-full flex flex-row items-center justify-center text-2xl font-bold">
          Avaliação
        </Dialog.DialogTitle>
        <Dialog.DialogDescription className="flex flex-col font-semibold">
          {name}
          <span className="font-normal">{department}</span>
        </Dialog.DialogDescription>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-full flex flex-col justify-between overflow-y-auto"
        >
          <div className="flex flex-col space-y-1 overflow-y-auto py-1">
            <div className="flex flex-col p-1 rounded-lg shadow-md shadow-black/20">
              <label>Nota1:</label>
              <Controller
                name="note1"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <Rating
                    {...field}
                    name="note1"
                    emptyIcon={
                      <Star size={26} weight="light" color="#000000" />
                    }
                    icon={<Star size={26} weight="fill" color="#ffd171" />}
                  />
                )}
              />
            </div>
            <div className="flex flex-col p-2 rounded-lg shadow-md shadow-black/20">
              <label>Nota2:</label>
              <Controller
                name="note2"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <Rating
                    {...field}
                    name="note1"
                    emptyIcon={
                      <Star size={26} weight="light" color="#000000" />
                    }
                    icon={<Star size={26} weight="fill" color="#ffd171" />}
                  />
                )}
              />
            </div>
            <div className="flex flex-col p-2 rounded-lg shadow-md shadow-black/20">
              <label>Nota3:</label>
              <Controller
                name="note3"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <Rating
                    {...field}
                    name="note1"
                    emptyIcon={
                      <Star size={26} weight="light" color="#000000" />
                    }
                    icon={<Star size={26} weight="fill" color="#ffd171" />}
                  />
                )}
              />
            </div>
            <div className="flex flex-col p-2 rounded-lg shadow-md shadow-black/20">
              <label>Nota4:</label>
              <Controller
                name="note4"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <Rating
                    {...field}
                    name="note1"
                    emptyIcon={
                      <Star size={26} weight="light" color="#000000" />
                    }
                    icon={<Star size={26} weight="fill" color="#ffd171" />}
                  />
                )}
              />
            </div>
            <div className="flex flex-col p-2 rounded-lg shadow-md shadow-black/20">
              <label>Nota5:</label>
              <Controller
                name="note5"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <Rating
                    {...field}
                    name="note1"
                    emptyIcon={
                      <Star size={26} weight="light" color="#000000" />
                    }
                    icon={<Star size={26} weight="fill" color="#ffd171" />}
                  />
                )}
              />
            </div>
            <div className="flex flex-col p-2 rounded-lg shadow-md shadow-black/20">
              <label>Nota6:</label>
              <Controller
                name="note6"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <Rating
                    {...field}
                    name="note1"
                    emptyIcon={
                      <Star size={26} weight="light" color="#000000" />
                    }
                    icon={<Star size={26} weight="fill" color="#ffd171" />}
                  />
                )}
              />
            </div>
            <div className="flex flex-col p-2 rounded-lg shadow-md shadow-black/20">
              <label>Nota7:</label>
              <Controller
                name="note7"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <Rating
                    {...field}
                    name="note1"
                    emptyIcon={
                      <Star size={26} weight="light" color="#000000" />
                    }
                    icon={<Star size={26} weight="fill" color="#ffd171" />}
                  />
                )}
              />
            </div>
            <div className="flex flex-col p-2 rounded-lg shadow-md shadow-black/20">
              <label>Nota8:</label>
              <Controller
                name="note8"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <Rating
                    {...field}
                    name="note1"
                    emptyIcon={
                      <Star size={26} weight="light" color="#000000" />
                    }
                    icon={<Star size={26} weight="fill" color="#ffd171" />}
                  />
                )}
              />
            </div>
            <div className="flex flex-col p-2 rounded-lg shadow-md shadow-black/20">
              <label>Nota9:</label>
              <Controller
                name="note9"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <Rating
                    {...field}
                    name="note1"
                    emptyIcon={
                      <Star size={26} weight="light" color="#000000" />
                    }
                    icon={<Star size={26} weight="fill" color="#ffd171" />}
                  />
                )}
              />
            </div>
          </div>
          <footer className="flex flex-row justify-end space-x-1">
            <Dialog.DialogClose className="w-30 py-1.5 px-6 text-[#292194] hover:bg-[#292194] hover:text-white font-semibold border-[#292194] border-2 bg-white rounded-full m-4 shadow-black/25 shadow-md">
              Cancelar
            </Dialog.DialogClose>
            <button
              type="submit"
              className="w-30 py-1.5 px-6 text-white border-2 border-transparent hover:bg-white hover:text-[#292194] hover:border-[#292194] hover:border-2 font-semibold bg-[#292194] rounded-full m-4 shadow-black/25 shadow-md"
            >
              Enviar
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.DialogPortal>
  );
}
