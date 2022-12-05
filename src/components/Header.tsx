import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { loginRequest } from "../services/authConfig";
import { callMsGraph } from "../services/graphs";

interface IUser {
  displayName: string;
  mail: string;
}

export function Header() {
  const { instance, accounts } = useMsal();
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        callMsGraph(response.accessToken).then((response) => setUser(response));
      });
  }, []);

  return (
    <header className="w-full flex flex-row mt-14 mb-5">
      <h2 className="pl-6  sm:text-3xl font-bold text-black text-start">
        Funcionários
      </h2>
      <h3>Hello: {user?.mail}</h3>
    </header>
  );
}
