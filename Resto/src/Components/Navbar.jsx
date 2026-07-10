import React from 'react'
import {NavLink} from 'react-router-dom'
<<<<<<<<< Temporary merge branch 1

import '../CSS/Navbar.css'
function Navbar() {
  return (
  <div >  <nav className='Nav'>



          <NavLink to="/">Home</NavLink> 
          <NavLink to="/about">About</NavLink>  
          <NavLink to="/menu">Menu</NavLink>  
          <NavLink to="/cart">Cart</NavLink>  



    </nav></div>
  )
}

export default Navbar