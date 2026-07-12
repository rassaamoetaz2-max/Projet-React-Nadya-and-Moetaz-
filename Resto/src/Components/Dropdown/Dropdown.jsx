import React from 'react'
import Dropdownbtn from './Dropdownbtn'
import DropdownContent from './DropdownContent'
import { useEffect, useState } from 'react'
import './CSS/Dropdown.css'
import LayoutBox from './LayoutBox'
function Dropdown({buttonText,content}) {
  const [open,setOpen]=useState(true) 
  
  const toggleButton =()=>{
    setOpen((open)=>setOpen(!open));
  }

  return (
    <>
<Dropdownbtn open={open} toggleButton={toggleButton} ><div>{buttonText}</div></Dropdownbtn>
       
  <div className='a'>{open?<DropdownContent>{content}</DropdownContent>:null}</div>

    </>


    
  )
}

export default Dropdown

   /*  <LayoutBox>{open?<DropdownContent>{content}</DropdownContent>:null}</LayoutBox>*/
/*    <div className='a'>{open?<DropdownContent>{content}</DropdownContent>:null}</div>*/
/*{open?<DropdownContent>{content}</DropdownContent>:null}
 */