import { Outlet } from "react-router";
import { Navbar } from "../../components/Navbar/Navbar";
import GlobalContextProvider from "../../context/Context";

function BasePage() {
  return (
    <main>
      <Navbar />
      <GlobalContextProvider>
        <Outlet />
      </GlobalContextProvider>
    </main>
  );
}

export default BasePage;
