import { useRating } from "../../hooks/useRating";
import { UserPopover } from "../UserPopover";

export function Header() {
  const { user } = useRating();

  return (
    <div className="w-full flex flex-row items-center justify-between py-2 px-2 sm:px-10 bg-white shadow-md">
      <img src="https://www.construtorapatriani.com.br/_next/image?url=%2Fimages%2FLogo-red.svg&w=256&q=75" />

      <div className="flex flex-row items-center gap-4">
        <p className="text-xs font-bold text-[#292194]">{user?.displayName}</p>
        <UserPopover
          alt={`foto do ${user?.displayName}`}
          urlImage={`https://construtorapatrianioutlook.sharepoint.com/_vti_bin/DelveApi.ashx/people/profileimage?size=L&userId=${user?.mail}&u=1670349934420`}
        />
      </div>
    </div>
  );
}
