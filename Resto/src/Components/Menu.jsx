import React, { useState } from 'react'
import '../CSS/Menu.css'
import {Routes,Route,NavLink,useParams}from 'react-router-dom'
import FoodCard from './FoodCard'
import Swal from 'sweetalert2'
import axios from 'axios'
import API from '../data/API'


function Menu({list,addToCart,setList,getList}) {
       // { list } = props;
      const isAdmin=false

const AddFood = () => {
  Swal.fire({
    title: 'إضافة طبق جديد 🍕',
    html: `
      <div style="display: flex; flex-direction: column; gap: 12px; text-align: left;">
        <label><b>اسم الطبق:</b></label>
        <input id="swal-name" class="swal2-input" placeholder="مثال: Margherita" style="margin: 0; width: 100%;">
        
        <label><b>السعر (DT):</b></label>
        <input id="swal-price" type="number" class="swal2-input" placeholder="مثال: 12.99" style="margin: 0; width: 100%;">
        
        <label><b>رابط الصورة (URL):</b></label>
        <input id="swal-image" class="swal2-input" placeholder="ضع رابط الصورة هنا" style="margin: 0; width: 100%;">
      </div>   `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'إضافة الطبق',
      cancelButtonText: 'إلغاء',
      confirmButtonColor: '#2ec4b6',
      cancelButtonColor: '#4a5568',
      preConfirm: () => {        
        const name = document.getElementById('swal-name').value;
        const price = document.getElementById('swal-price').value;
        const image = document.getElementById('swal-image').value;
  
       
        if (!name || !price || !image) {
          Swal.showValidationMessage('الرجاء تعمير جميع الخانات!');
          return false;
        }
  
        return { name: name, price: parseFloat(price), image: [image] };
      }
    }).then(async (result) => {
     
      if (result.isConfirmed) {
        try {
         
          await axios.post(API, result.value);         
         
          getList();           
          
          Swal.fire('تمت الإضافة!', 'تم إدراج الطبق بنجاح في القائمة.', 'success');
        } catch (error) {
          console.log(error);
          Swal.fire('خطأ!', 'فشلت عملية الإضافة، ثبت من السيرفر.', 'error');
        }
      }
    });
  };
  return (
    <div className='y'>
       <nav className='sidebar'>
         <NavLink className="navlink"   to="/menu/All">All</NavLink> 
          <NavLink className="navlink" to="/menu/Pizza">Pizza</NavLink>  
          <NavLink className="navlink" to="/menu/sandwich">Sandwitch</NavLink>  
          <NavLink className="navlink" to="/menu/drink">Drinks</NavLink> 
       </nav>
        <div className='productsmenu'>
          <div> Allergies</div>
          <div className="menu-header">
            
              <h1>🍕 اكتشف قائمة الأطباق الشهية</h1>
                <p>اختر وجبتك المفضلة من بين أفضل المأكولات التونسية والعالمية المصنوعة بحب</p>
          </div>

           <Routes>
                <Route path="/:categoryName" element={<FilteredProductsList list={list} addToCart={addToCart}  />} />
                <Route path="/" element={<FilteredProductsList list={list} addToCart={addToCart}  getList={getList} />} />
            
        </Routes>  
        </div>  

    </div>
  )}
  function FilteredProductsList({ list,addToCart,getList}) {
    
    let { categoryName } = useParams(); 
    
    const activeCat = categoryName || "all";

    
    const displayedItems = activeCat.toLowerCase() === "all"? list: list.filter(item => item.category.toLowerCase() === activeCat.toLowerCase());

    return (
        <div className='foodsgallery'>
            {
                displayedItems.map(item => (<FoodCard key={item.id}  food={item} addToCart={addToCart}  getList={getList}  /> ))
             }
        </div>
    );
}



export default Menu






