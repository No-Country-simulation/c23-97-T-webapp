import React, {useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import Listaitem from '../ListaItems/Listaitem.jsx'
// Esta parte es el Header de la pagina comun a todas las paginas
// Aparecen menu, logo, login y compras
// Falta hacer
export const Navbar = () => {
  const [menu, setMenu] = useState("home")
  return (
    <div className='navbar flex-col bg-[#f5f2f0] p-4'>
      <div className="container mx-auto flex justify-between items-center">
      <div className=" text-2xl text-[#181411] font-bold">QR Share Pro</div>
        <ul className='nav-menu hidden md:flex gap-4'>
{/*         <Listaitem>Shop</Listaitem>
            <Listaitem>Men</Listaitem>
            <Listaitem>Woman</Listaitem>
            <Listaitem>Kids</Listaitem>*/}
            <li onClick={()=>{setMenu("home")}} className="hover:text-[#8a7560] cursor-pointer">Home{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("about_us")}} className="hover:text-[#8a7560] cursor-pointer">About us{menu==="about_us"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("services")}} className="hover:text-[#8a7560] cursor-pointer">Services{menu==="services"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contact")}} className="hover:text-[#8a7560] cursor-pointer">Contact{menu==="contact"?<hr/>:<></>}</li> 
        </ul>
        <div className='nav-login-cart'>
            <button className="w-40 h-12 rounded-full border border-gray-500 text-gray-700 font-medium text-lg 
         hover:bg-gray-200 focus:outline-none active:bg-blue-500 active:text-white">Login</button>
            <img src={cart_icon} alt="carrito" className='cart_icon'/>
            <div className='nav-cart-count'>0         
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar
