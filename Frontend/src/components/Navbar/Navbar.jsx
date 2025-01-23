import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
// Esta parte es el Header de la pagina comun a todas las paginas
// Aparecen menu, logo, login y compras
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="Logo" className='logo'/>            
        </div>
        <ul className='nav-menu'>
            <li>Shop <hr/></li>
            <li>Men</li>
            <li>Woman</li>
            <li>Kids</li>
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
