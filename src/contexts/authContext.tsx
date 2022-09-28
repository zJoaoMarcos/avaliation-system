import { createContext } from "react";
import { User } from "../types/User";

type AuthContextData = {
  user: User | null;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);
