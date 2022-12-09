import { useRating } from "../../hooks/useRating";
import { AnimationLoading } from "../AnimationLoading";
import { TableRowEmployee } from "../TableRowEmployee";

export function TableEmployee() {
  const { employees, search, filteredEmployees, isLoading } = useRating();

  return (
    <div className="w-full py-4 bg-white rounded-lg shadow-md shadow-black/25">
      {isLoading && <AnimationLoading />}
      <table className="w-full">
        <tbody className="">
          {search.length > 0 ? (
            <>
              {filteredEmployees.map((employee) => {
                return (
                  <TableRowEmployee
                    key={employee.email}
                    department={employee.department}
                    email={employee.email}
                    name={employee.name}
                    ratings={employee.ratings}
                  />
                );
              })}
            </>
          ) : (
            <>
              {employees.map((employee) => {
                return (
                  <TableRowEmployee
                    key={employee.name}
                    department={employee.department}
                    email={employee.email}
                    name={employee.name}
                    ratings={employee.ratings}
                  />
                );
              })}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}
