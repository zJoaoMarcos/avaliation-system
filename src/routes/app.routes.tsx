import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Avaliation } from "../pages/Avaliation";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/avaliation" element={<Avaliation />} />
      </Routes>
    </BrowserRouter>
  );
}
