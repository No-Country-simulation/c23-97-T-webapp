import { useContext, useState } from "react";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router";
import { GlobalContext } from "../../context/Context";
//import './Navbar.css'
//import logo from '../Assets/logo.png'
//import Listaitem from '../ListaItems/Listaitem.jsx'
// Esta parte es el Header de la pagina comun a todas las paginas
// Aparecen menu, logo, login y compras
// Falta hacer
export const Navbar = () => {
  const { totalItems } = useContext(GlobalContext);
  const [menu, setMenu] = useState("home");
  return (
    <div className="border border-gray-300 bg-[#f5f2f0] shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        <Link to="/">
          <h1 className="text-2xl text-[#181411] font-bold">QR Share Pro</h1>
        </Link>
        {/* Navigation Menu */}
        <ul className="hidden md:flex gap-6 text-lg text-[#181411] font-medium">
          {/*         <Listaitem>Shop</Listaitem>
            <Listaitem>Men</Listaitem>
            <Listaitem>Woman</Listaitem>
            <Listaitem>Kids</Listaitem>*/}
          <Link to="/">
            <li
              onClick={() => setMenu("home")}
              className={`cursor-pointer hover:text-[#8a7560] ${
                menu === "home"
                  ? "text-[#8a7560] border-b-2 border-[#8a7560]"
                  : ""
              }`}
            >
              Inicio
            </li>
          </Link>
          <Link to="/history">
            <li
              onClick={() => setMenu("history")}
              className={`cursor-pointer hover:text-[#8a7560] ${
                menu === "history"
                  ? "text-[#8a7560] border-b-2 border-[#8a7560]"
                  : ""
              }`}
            >
              Historial
            </li>
          </Link>
          <Link to="/services">
            <li
              onClick={() => setMenu("services")}
              className={`cursor-pointer hover:text-[#8a7560] ${
                menu === "services"
                  ? "text-[#8a7560] border-b-2 border-[#8a7560]"
                  : ""
              }`}
            >
              Servicios
            </li>
          </Link>
          <Link to="/contact">
            <li
              onClick={() => setMenu("contact")}
              className={`cursor-pointer hover:text-[#8a7560] ${
                menu === "contact"
                  ? "text-[#8a7560] border-b-2 border-[#8a7560]"
                  : ""
              }`}
            >
              Contacto
            </li>
          </Link>
        </ul>
        {/* Login and Cart */}

        <div className="relative flex items-center gap-4 mt-4 md:mt-0">
          <Link to="/login">
            <button className="w-32 h-10 rounded-full border border-gray-500 text-gray-700 text-sm hover:bg-gray-200 active:bg-blue-500 active:text-white">
              Login
            </button>
          </Link>
          <Link to="/cart">
            <img src={cart_icon} alt="Cart" className="w-8 h-8" />
            <span className="absolute -top-1 right-0 transform translate-x-1 -translate-y-1.5 w-5 h-5 flex items-center justify-center rounded-full bg-red-500 text-white text-xs">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden justify-around items-center mt-4">
        <Link
          to="/"
          className={`flex-1 text-center py-2 ${
            menu === "home" ? "text-[#8a7560]" : "text-[#181411]"
          }`}
        >
          Inicio {/* Texto dentro del Link */}
        </Link>
        <Link
          to="/history"
          className={`flex-1 text-center py-2 ${
            menu === "history" ? "text-[#8a7560]" : "text-[#181411]"
          }`}
        >
          Historial
        </Link>
        <Link
          to="/services"
          className={`flex-1 text-center py-2 ${
            menu === "services" ? "text-[#8a7560]" : "text-[#181411]"
          }`}
        >
          Servicios
        </Link>
        <Link
          to="/contact"
          className={`flex-1 text-center py-2 ${
            menu === "contact" ? "text-[#8a7560]" : "text-[#181411]"
          }`}
        >
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
