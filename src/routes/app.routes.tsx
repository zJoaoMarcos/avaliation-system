import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Avaliation } from "../pages/Avaliation";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Avaliation />} />
      </Routes>
    </BrowserRouter>
  );
}
