import { useMsal } from "@azure/msal-react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { loginRequest } from "../services/authConfig";
import { callMsGraph } from "../services/graphs";

export interface Employee {
  name: string;
  email: string;
  department: string;
  ratings: RatingsEmployee[];
}

interface User {
  displayName: string;
  mail: string;
}

export interface RatingsEmployee {
  whoVoted?: string;
  id?: string;
  note1: number;
  note2: number;
  note3: number;
  note4: number;
  note5: number;
  note6: number;
  note7: number;
  note8: number;
  note9: number;
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
  ratingEmployee: (employeeEmail: string, ratings: RatingsEmployee) => void;
  isLoading: boolean;
}

const RatingContext = createContext<RatingContextData>({} as RatingContextData);

export function RatingProvider({ children }: RatingProviderProps): JSX.Element {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<User>();
  const [isOpen, setIslOpen] = useState(false);

  useEffect(() => {
    async function getEmployees() {
      const response = await api.get(`employees/${user?.mail}`);
      setEmployees(response.data);
      setIsLoading(false);
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

  async function ratingEmployee(
    employeeEmail: string,
    ratings: RatingsEmployee
  ) {
    try {
      const newRating: RatingsEmployee = {
        whoVoted: user?.mail,
        ...ratings,
      };

      const updatedEmployees = [...employees];
      const employeeExists = updatedEmployees.find(
        (employee) => employee.email === employeeEmail
      );

      if (employeeExists) {
        await api
          .post(`/employee/${employeeEmail}/rating`, {
            ...newRating,
          })
          .then((res) => employeeExists?.ratings.push({ ...res.data }));

        setEmployees(updatedEmployees);
        toast.success("Avaliação Concluida!!");
      }
      return Error();
    } catch {
      toast.error("Falha na sua Avaliação");
    }
  }

  const closeModal = () => {
    setIsLoading(false);
  };

  return (
    <RatingContext.Provider
      value={{
        employees,
        searchEmployees,
        ratingEmployee,
        filteredEmployees,
        search,
        user,
        isLoading,
      }}
    >
      {children}
    </RatingContext.Provider>
  );
}

export function useRating(): RatingContextData {
  const context = useContext(RatingContext);

  return context;
}
