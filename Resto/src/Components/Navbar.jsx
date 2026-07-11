import React from 'react'
import {NavLink} from 'react-router-dom'

import '../CSS/Navbar.css'
function Navbar({user,logOut,setMode}) {
  return (
  <div >  <nav className='Nav'>



          <NavLink to="/">Home</NavLink> 
          <NavLink to="/about">About</NavLink>  
          <NavLink to="/menu">Menu</NavLink>  
          <NavLink to="/cart">Cart</NavLink> 
      
          {Object.keys(user).length===0?    <div> <NavLink to="/login" onClick={()=>{setMode("login")}} >Login</NavLink>  
          <div>/</div>
          <NavLink to="/login" onClick={()=>{setMode("create")}}>Create Account</NavLink> </div>
          :
           <div><div>  Welcome+{ user.username  } </div>  
          <a href="/" onClick={()=>{logOut()}}>log Out</a>
          </div> } 
            



    </nav></div>
  )
}

export default Navbar