import { Outlet } from "react-router";
import { Navbar } from "../../components/Navbar/Navbar";

function BasePage() {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default BasePage;
