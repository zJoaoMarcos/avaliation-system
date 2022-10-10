import React from "react";
import { AuthProvider } from "./contexts/authProvider";
import { Home } from "./pages/Home/index";
import "./styles/main.css";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
};

export default App;
