import { BrowserRouter, Route, Routes } from "react-router";
import BasePage from "./pages/BasePage";
import Landing from "./pages/Landing";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
