import React from 'react'
import {NavLink} from 'react-router-dom'
import '../CSS/Navbar.css'
import '../CSS/Navbar.css'
function Navbar() {
  return (
  <div >  <nav className='Nav'>

        <div className='logo-container'>
          <span className='logo-main'>RESTO</span>
          <span className='logo-sub'>NADYA & MOETAZ</span>
        </div>
        <div className='nav-links'>
          <NavLink to="/">Home</NavLink> 
          <NavLink to="/about">About</NavLink>  
          <NavLink to="/menu">Menu</NavLink>  
          <NavLink to="/cart">Cart</NavLink>  
</div>


    </nav></div>
  )
}

export default Navbar