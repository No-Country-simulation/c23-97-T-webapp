import { HashRouter, Route, Routes } from "react-router";
import BasePage from "./pages/BasePage";
import Landing from "./pages/Landing";
import Product from "./pages/Product";

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Landing />} />
          <Route path=":id" element={<Product />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
