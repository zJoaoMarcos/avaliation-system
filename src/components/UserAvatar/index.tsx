import * as Avatar from "@radix-ui/react-avatar";
import { Spinner } from "phosphor-react";

interface UserAvatarProps {
  urlImage: string;
  alt: string;
}

export function UserAvatar({ urlImage, alt }: UserAvatarProps) {
  return (
    <div>
      <Avatar.Root className="w-10 md:w-14 h-10 md:h-14 inline-flex items-center border-2 border-[#292194] justify-center align-middle overflow-hidden rounded-full shadow-md shadow-black/40">
        <Avatar.Image
          className="w-full h-full object-scale-down"
          src={urlImage}
          alt={`Logotipo da ${alt}`}
        />
        <Avatar.Fallback
          className=" flex justify-center items-center bg-transparent etext-sm animate-spin-slow"
          delayMs={600}
        >
          <Spinner size={32} color="#9e9e9e" />
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
}
