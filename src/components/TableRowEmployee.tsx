import { useRating } from "../hooks/useRating";
import { RatingButton } from "./RatingButton";
import { UserAvatar } from "./UserAvatar";

interface EmployeesProps {
  employee: {
    email: string;
    name: string;
    department: string;
    ratings: [
      {
        whoVoted: string;
      }
    ];
  };
}

export function TableRowEmployee(props: EmployeesProps) {
  const { user } = useRating();

  return (
    <tr key={props.employee.email}>
      <td className="pl-4 md:pl-8">
        <UserAvatar
          urlImage={`https://construtorapatrianioutlook.sharepoint.com/_vti_bin/DelveApi.ashx/people/profileimage?size=L&userId=${props.employee.email}&u=1670349934420`}
          alt={props.employee.name}
        />
      </td>
      <td className="font-semibold text-left md:text-base px-2 text-xs">
        {props.employee.name}
      </td>
      <td className="font-semibold text-center md:text-base px-2 text-xs">
        {props.employee.department}
      </td>
      <td className="pr-4 md:pr-0">
        <RatingButton
          disable={props.employee.ratings.map((vote) =>
            vote.whoVoted.toString() === user?.mail ? true : false
          )}
          department={props.employee.department}
          name={props.employee.name}
          email={props.employee.email}
        />
      </td>
    </tr>
  );
}
