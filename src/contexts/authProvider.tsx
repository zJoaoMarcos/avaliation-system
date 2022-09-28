import { useContext, useEffect, useState } from "react";
import { User } from "../types/User";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getEmailInLocalStorage() {
      const getSessionTracking =
        await localStorage.sessionTracking_SignedInAccountList.split(",");
      const sessionTrack = await getSessionTracking[2].slice(23, -1);
      const sessionTrackItems: any = await localStorage
        .getItem(sessionTrack)
        ?.split(",");
      const getEmailInSessionTrack = await sessionTrackItems[1].slice(7, -1);
      setUser(getEmailInSessionTrack);
    }
    getEmailInLocalStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
