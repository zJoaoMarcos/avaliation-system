import { Configuration, PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { Routes } from "./routes/routes";
import "./styles/main.css";

const configuration: Configuration = {
  auth: {
    clientId: `${import.meta.env.AZURE_APP_ID}`,
    authority: "https://login.microsoftonline.com/common",
  },
};

const pca = new PublicClientApplication(configuration);

export function App() {
  return (
    <MsalProvider instance={pca}>
      <Routes />;
    </MsalProvider>
  );
}
