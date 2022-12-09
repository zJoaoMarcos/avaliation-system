import { Employee, useRating } from "../../hooks/useRating";
import { RatingButton } from "../RatingButton";
import { UserAvatar } from "../UserAvatar";

interface EmployeesProps extends Employee {}

export function TableRowEmployee({
  department,
  email,
  name,
  ratings,
}: EmployeesProps) {
  const { user } = useRating();

  return (
    <tr key={email}>
      <td className="pl-4 sm:pl-10">
        <UserAvatar
          urlImage={`https://construtorapatrianioutlook.sharepoint.com/_vti_bin/DelveApi.ashx/people/profileimage?size=L&userId=${email}&u=1670349934420`}
          alt={name}
        />
      </td>
      <td className="font-semibold text-left md:text-base px-2 text-xs">
        {name}
      </td>
      <td className="font-semibold text-center md:text-base hidden sm:flex pt-6 px-2 text-xs">
        {department}
      </td>
      <td className="pr-4 sm:pr-6 md:pr-0">
        <RatingButton
          disable={ratings.map((vote) =>
            vote.whoVoted === user?.mail ? true : false
          )}
          department={department}
          name={name}
          email={email}
        />
      </td>
    </tr>
  );
}
