import { MagnifyingGlass } from "phosphor-react";
import { useRating } from "../../hooks/useRating";

export function SearchButton() {
  const { searchEmployees } = useRating();

  return (
    <div className="w-full flex flex-row py-2 px-4 space-x-2 rounded-lg bg-white shadow-md shadow-black/25 ">
      <MagnifyingGlass size={24} />
      <input
        type="text"
        placeholder="Buscar..."
        onChange={(e) => searchEmployees(e.target.value)}
        className="w-full text-xl font-normal focus:outline-none placeholder:font-normal placeholder:text-black placeholder:opacity-70 placeholder:focus:opacity-25"
      />
    </div>
  );
}
