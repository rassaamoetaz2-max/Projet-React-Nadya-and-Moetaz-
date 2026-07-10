import React, { useState } from 'react'
import '../CSS/Menu.css'
import {Routes,Route,NavLink,useParams}from 'react-router-dom'
import FoodCard from './FoodCard'
function Menu(props) {
       const { list } = props;
  return (
    <div className='y'>
       <nav className='sidebar'>
         <NavLink className="navlink"   to="/menu/All">All</NavLink> 
          <NavLink className="navlink" to="/menu/Pizza">Pizza</NavLink>  
          <NavLink className="navlink" to="/menu/sandwitch">Sandwitch</NavLink>  
          <NavLink className="navlink" to="/menu/drinks">Drinks</NavLink> 
       </nav>
        <div className='productsmenu'>
           <Routes>
                <Route path="/:categoryName" element={<FilteredProductsList list={list} />} />
                <Route path="/" element={<FilteredProductsList list={list} categoryDefault="all" />} />
            
        </Routes>  
        </div>  

    </div>
  )}
  function FilteredProductsList({ list, categoryDefault }) {
    
    let { categoryName } = useParams(); 
    
    const activeCat = categoryName || categoryDefault || "all";

    
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






