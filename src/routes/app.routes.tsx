import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RatingProvider } from "../hooks/useRating";
import { Avaliation } from "../pages/Avaliation";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <RatingProvider>
        <Routes>
          <Route path="/" element={<Avaliation />} />
        </Routes>
      </RatingProvider>
    </BrowserRouter>
  );
}
