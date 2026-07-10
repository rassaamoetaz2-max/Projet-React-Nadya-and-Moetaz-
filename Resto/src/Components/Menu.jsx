import React, { useState } from 'react'
import '../CSS/menu.css'
import '../CSS/menu.css'
import {Routes,Route,NavLink,useParams}from 'react-router-dom'
import FoodCard from './FoodCard'
function Menu(props) {
       const { list } = props;
  return (
    <div className='y'>
       <nav className='sidebar'>
         <NavLink className="navlink"   to="/menu/All">All</NavLink> 
          <NavLink className="navlink" to="/menu/Pizza">Pizza</NavLink>  
          <NavLink className="navlink" to="/menu/sandwich">Sandwitch</NavLink>  
          <NavLink className="navlink" to="/menu/drink">Drinks</NavLink> 
       </nav>
        <div className='productsmenu'>
           <Routes>
                <Route path="/:categoryName" element={<FilteredProductsList list={list} />} />
                <Route path="/" element={<FilteredProductsList list={list}  />} />
            
        </Routes>  
        </div>  

    </div>
  )}
  function FilteredProductsList({ list}) {
    
    let { categoryName } = useParams(); 
    
    const activeCat = categoryName || "all";

    
    const displayedItems = activeCat.toLowerCase() === "all"? list: list.filter(item => item.category.toLowerCase() === activeCat.toLowerCase());

    return (
        <div className='foodsgallery'>
            {
                displayedItems.map(item => (<FoodCard key={item.id} food={item} /> ))
             }
        </div>
    );
}



export default Menu






