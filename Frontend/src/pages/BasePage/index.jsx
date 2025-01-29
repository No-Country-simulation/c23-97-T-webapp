import { Outlet } from "react-router";
import { Navbar } from "../../components/Navbar/Navbar";
import GlobalContextProvider from "../../context/Context";
import { Footer } from "../../components/Footer/Footer";

function BasePage() {
  return (
    <main className="flex flex-col h-screen">
      <GlobalContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </GlobalContextProvider>
    </main>
  );
}

export default BasePage;
