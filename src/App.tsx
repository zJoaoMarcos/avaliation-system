import { Configuration, PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { Routes } from "./routes/routes";
import "./styles/main.css";

const configuration: Configuration = {
  auth: {
    clientId: "e79eea08-52d8-4c4b-a8b0-2c5068c8f2c6",
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
