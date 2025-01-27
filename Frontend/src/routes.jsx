import { HashRouter, Route, Routes } from "react-router";
import BasePage from "./pages/BasePage";
import Landing from "./pages/Landing";
import Product from "./pages/Product";
import Category from "./pages/Category";

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Landing />} />
          <Route path=":category" element={<Category />} />
          <Route path=":category/:id" element={<Product />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
