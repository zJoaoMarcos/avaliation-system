import { RatingButton } from "./RatingButton";

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
  return (
    <tr key={props.employee.email}>
      <td className="font-semibold text-center text-base p-6">
        {props.employee.name}
      </td>
      <td className="font-semibold text-center text-base p-6">
        {props.employee.department}
      </td>
      <td>
        <RatingButton
          disable={props.employee.ratings.map((vote) =>
            vote.whoVoted.toString() ===
            "pedro.paizam@construtorapatriani.com.br"
              ? true
              : false
          )}
          department={props.employee.department}
          name={props.employee.name}
          email={props.employee.email}
        />
      </td>
    </tr>
  );
}
