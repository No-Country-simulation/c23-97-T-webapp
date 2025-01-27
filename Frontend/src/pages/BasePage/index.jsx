import { Outlet } from "react-router";
import { Navbar } from "../../components/Navbar/Navbar";
import GlobalContextProvider from "../../context/Context";
import { Footer } from "../../components/Footer/Footer";

function BasePage() {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <GlobalContextProvider>
        <Outlet />
      </GlobalContextProvider>
      <Footer />
    </main>
  );
}

export default BasePage;
