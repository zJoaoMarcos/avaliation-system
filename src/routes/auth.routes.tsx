import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn/index";

export function AuthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
