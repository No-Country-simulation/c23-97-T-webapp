import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
