import { MagnifyingGlass } from "phosphor-react";

export function SearchButton() {
  return (
    <div className="w-full flex flex-row py-2 px-4 space-x-2 rounded-lg bg-white shadow-md shadow-black/25 ">
      <a href="">
        <MagnifyingGlass size={30} />
      </a>
      <input
        type="text"
        placeholder="Pesquisar"
        className="text-xl font-normal focus:outline-none placeholder:font-normal placeholder:text-black placeholder:focus:opacity-25"
      />
    </div>
  );
}
