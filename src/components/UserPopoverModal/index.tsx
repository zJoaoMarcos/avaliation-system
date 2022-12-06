import { useMsal } from "@azure/msal-react";
import * as Popover from "@radix-ui/react-popover";

export function UserPopoverModal() {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logout().catch((e) => {
      console.log(e);
    });
  };
  return (
    <Popover.Portal className="">
      <Popover.Content className="w-20 md:w-24 p-4 flex items-center justify-center rounded bg-gray-100 shadow shadow-black/40">
        <button
          onClick={() => handleLogout()}
          className="text-xs md:text-md text-[#292194] font-bold underline transition-colors hover:text-[#4F46BB]"
        >
          Sair
        </button>
      </Popover.Content>
    </Popover.Portal>
  );
}
