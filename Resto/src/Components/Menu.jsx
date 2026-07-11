import React, { useState } from 'react'
import '../CSS/Menu.css'
import {Routes,Route,NavLink,useParams}from 'react-router-dom'
import FoodCard from './FoodCard'
function Menu(props) {
       const { list } = props.list;
  return (
    <div className='y'>
       <nav className='sidebar'>
         <NavLink className="navlink"   to="/menu/All">All</NavLink> 
          <NavLink className="navlink" to="/menu/Pizza">Pizza</NavLink>  
          <NavLink className="navlink" to="/menu/sandwich">Sandwitch</NavLink>  
          <NavLink className="navlink" to="/menu/drink">Drinks</NavLink> 
       </nav>
        <div className='productsmenu'>
          <div className="menu-header">
              <h1>🍕 اكتشف قائمة الأطباق الشهية</h1>
                <p>اختر وجبتك المفضلة من بين أفضل المأكولات التونسية والعالمية المصنوعة بحب</p>
          </div>
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
                displayedItems.map(item => (<FoodCard key={item.id} food={item} cart={props.cart} setCart={props.setCart} /> ))
             }
        </div>
    );
}



export default Menu






