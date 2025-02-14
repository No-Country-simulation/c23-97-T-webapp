import { HashRouter, Route, Routes } from "react-router";
import BasePage from "./pages/BasePage";
import Landing from "./pages/Landing";
import Product from "./pages/Product";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import ShopingCart from "./pages/ShopingCart";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import ScrollTop from "./components/ScrollTop";
import HistoryPage from "./pages/HistoryPage";

function AppRoutes() {
  return (
    <HashRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Landing />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<ShopingCart />} />
          <Route path=":category" element={<Category />} />
          <Route path=":category/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
