import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <div>
      <AuthenticatedTemplate>
        <AppRoutes />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <AuthRoutes />
      </UnauthenticatedTemplate>
    </div>
  );
}
