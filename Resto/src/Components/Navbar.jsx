import React from 'react'
import {NavLink} from 'react-router-dom'
import '../CSS/Navbar.css'
function Navbar({user,logOut,setMode}) {
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
      
          {Object.keys(user).length===0?    
          <div> <NavLink to="/login" onClick={()=>{setMode("login")}} >Login</NavLink>  
          
          <NavLink to="/login" onClick={()=>{setMode("create")}}>Create Account</NavLink> </div>
          :
           <div><div>  Welcome { user.username  } </div>  
          <a href="/" onClick={()=>{logOut()}}>log Out</a>
          </div> } 
            
          </div>


    </nav></div>
  )
}

export default Navbar