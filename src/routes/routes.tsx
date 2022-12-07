import { InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const isAuthenticated = useIsAuthenticated();
  const { inProgress } = useMsal();

  console.log(inProgress);

  return !isAuthenticated && inProgress === InteractionStatus.None ? (
    <AuthRoutes />
  ) : (
    <AppRoutes />
  );
}
