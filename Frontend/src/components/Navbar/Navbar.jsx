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
  const { shoppingCart } = useContext(GlobalContext);
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
              Home
            </li>
          </Link>
          <Link to="/about_us">
          <li
            onClick={() => setMenu("about_us")}
            className={`cursor-pointer hover:text-[#8a7560] ${
              menu === "about_us"
                ? "text-[#8a7560] border-b-2 border-[#8a7560]"
                : ""
            }`}
          >
            About us
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
            Services
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
            Contact
          </li>
          </Link>
        </ul>
        {/* Login and Cart */}
        <div className="relative flex items-center gap-4 mt-4 md:mt-0">
          <button className="w-32 h-10 rounded-full border border-gray-500 text-gray-700 text-sm hover:bg-gray-200 active:bg-blue-500 active:text-white">
            Login
          </button>
          <Link to="/cart">
            <img src={cart_icon} alt="Cart" className="w-8 h-8" />
            <span className="absolute -top-1 right-0 transform translate-x-1 -translate-y-1.5 w-5 h-5 flex items-center justify-center rounded-full bg-red-500 text-white text-xs">
              {shoppingCart.length}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden justify-around items-center mt-4">
        <Link to="/" className={`flex-1 text-center py-2 ${menu === "home" ? "text-[#8a7560]" : "text-[#181411]"}`}>
          Home  {/* Texto dentro del Link */}
        </Link>
        <Link to="/about_us" className={`flex-1 text-center py-2 ${menu === "about_us" ? "text-[#8a7560]" : "text-[#181411]"}`}>
          About Us
        </Link>
        <Link to="/services" className={`flex-1 text-center py-2 ${menu === "services" ? "text-[#8a7560]" : "text-[#181411]"}`}>
          Services
        </Link>
        <Link to="/contact" className={`flex-1 text-center py-2 ${menu === "contact" ? "text-[#8a7560]" : "text-[#181411]"}`}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
