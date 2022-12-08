import Rating from "@mui/material/Rating";
import * as Dialog from "@radix-ui/react-dialog";
import { Star } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import { Employee, useRating } from "../hooks/useRating";

import { UserAvatar } from "./UserAvatar";

type EmployeeAvaliation = Omit<Employee, "ratings">;

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
  const { control, handleSubmit } = useForm<InputRatings>();
  const { ratingEmployee, closeModal } = useRating();

  const handleRating = (data: any) => {
    ratingEmployee(email, {
      note1: Number(data.note1),
      note2: Number(data.note2),
      note3: Number(data.note3),
      note4: Number(data.note4),
      note5: Number(data.note5),
      note6: Number(data.note6),
      note7: Number(data.note7),
      note8: Number(data.note8),
      note9: Number(data.note9),
    });
    closeModal();
  };

  return (
    <Dialog.DialogPortal>
      <Dialog.DialogOverlay className="bg-black/10 inset-0 fixed" />
      <Dialog.Content className="w-[700px] h-[95%] flex flex-col justify-between bg-white py-6 px-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md shadow-black/10">
        <Dialog.DialogTitle className="w-full flex flex-row items-center justify-center text-2xl font-bold">
          Avaliação
        </Dialog.DialogTitle>
        <Dialog.DialogDescription className="flex flex-col font-semibold">
          <div className="flex flex-row items-center gap-2">
            <UserAvatar
              urlImage={`https://construtorapatrianioutlook.sharepoint.com/_vti_bin/DelveApi.ashx/people/profileimage?size=L&userId=${email}&u=1670349934420`}
              alt={name}
            />
            <div>
              <p>{name}</p>
              <span className="font-normal">{department}</span>
            </div>
          </div>
        </Dialog.DialogDescription>
        <form
          onSubmit={handleSubmit(handleRating)}
          className="h-full flex flex-col pt-4 justify-between overflow-y-auto"
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
