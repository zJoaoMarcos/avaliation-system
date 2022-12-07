import { useMsal } from "@azure/msal-react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";
import { loginRequest } from "../services/authConfig";
import { callMsGraph } from "../services/graphs";

export interface Employee {
  name: string;
  email: string;
  department: string;
  ratings: [
    {
      whoVoted: string;
    }
  ];
}

interface User {
  displayName: string;
  mail: string;
}

interface RatingProviderProps {
  children: ReactNode;
}

interface RatingContextData {
  employees: Employee[];
  user: User | undefined;
  search: string;
  searchEmployees: (employee: string) => void;
  filteredEmployees: Employee[] | [];
}

const RatingContext = createContext<RatingContextData>({} as RatingContextData);

export function RatingProvider({ children }: RatingProviderProps): JSX.Element {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<User>();

  console.log(search);

  useEffect(() => {
    async function getEmployees() {
      const response = await api.get(`employees/${user?.mail}`);
      setEmployees(response.data);
    }
    getEmployees();
  }, [user]);

  const { instance, accounts } = useMsal();

  useEffect(() => {
    async function getUserData() {
      await instance
        .acquireTokenSilent({
          ...loginRequest,
          account: accounts[0],
        })
        .then((response) => {
          callMsGraph(response.accessToken).then((response) =>
            setUser(response)
          );
        });
    }
    getUserData();
  }, []);

  function searchEmployees(employee: string) {
    setSearch(employee);
  }

  const filteredEmployees =
    search.length > 0
      ? employees.filter((employee) =>
          employee.name.toLocaleUpperCase().includes(search.toLocaleUpperCase())
        )
      : [];

  return (
    <RatingContext.Provider
      value={{ employees, searchEmployees, filteredEmployees, search, user }}
    >
      {children}
    </RatingContext.Provider>
  );
}

export function useRating(): RatingContextData {
  const context = useContext(RatingContext);

  return context;
}
