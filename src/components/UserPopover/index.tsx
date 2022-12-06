import * as Popover from "@radix-ui/react-popover";
import { UserAvatar } from "../UserAvatar";
import { UserPopoverModal } from "../UserPopoverModal";

interface PopoverAvatarProps {
  urlImage: string;
  alt: string;
}

export function UserPopover({ urlImage, alt }: PopoverAvatarProps) {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <UserAvatar urlImage={urlImage} alt={alt} />
      </Popover.Trigger>
      <UserPopoverModal />
    </Popover.Root>
  );
}
