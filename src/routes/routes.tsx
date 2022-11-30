import { useIsAuthenticated } from "@azure/msal-react";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const isAuthenticated = useIsAuthenticated();

  console.log(isAuthenticated);

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}
