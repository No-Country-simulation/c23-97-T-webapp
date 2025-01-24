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
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="Logo" className='logo'/>            
        </div>
        <ul className='nav-menu'>
{/*         <Listaitem>Shop</Listaitem>
            <Listaitem>Men</Listaitem>
            <Listaitem>Woman</Listaitem>
            <Listaitem>Kids</Listaitem>*/}
            <li onClick={()=>{setMenu("home")}}>Home{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("about_us")}}>About us{menu==="about_us"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("services")}}>Services{menu==="services"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contact")}}>Contact{menu==="contact"?<hr/>:<></>}</li> 
        </ul>
        <div className='nav-login-cart'>
            <button>Login</button>
            <img src={cart_icon} alt="carrito" className='cart_icon'/>
            <div className='nav-cart-count'>0         
            </div>
        </div>
    </div>
  )
}

export default Navbar
