import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './CSS/Dropdownbtn.css'
function Dropdownbtn({children,open,toggleButton}) {
  return (
    <span className={open?"buttn-open":""} >
        <div className='dropdown-area' onClick={()=>toggleButton()} >
        {children}
        <span  id={open?"arrow":""} >{open ? <FaChevronUp /> : <FaChevronDown />}</span>
        
        </div>
        
    
    
    </span>
    
  )
}

export default Dropdownbtn