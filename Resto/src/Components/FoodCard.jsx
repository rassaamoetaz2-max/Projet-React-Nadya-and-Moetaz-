import React, { useState } from 'react'
import '../CSS/menu.css'
import axios  from 'axios'
import API from '../data/API'
import Swal from 'sweetalert2'
function FoodCard({isAnAdmin,key,food,addToCart,getList}) {


  const[updating, setupdating]=useState(false)
  const[price,setprice]=useState(food.price)
  const[category,setCategory]=useState("")


 let  isAdmin=isAnAdmin()
 let isUser=isAnAdmin()
 
  const afficher=()=>{
          setupdating(prev=>!prev)
  }

  const edit=async(id)=>{
    Swal.fire({
      title: 'تأكيد تغيير السعر',
      text: "هل تريد تغيير السعر إلى "+`${price}`+"DT؟",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#2d3748',
      cancelButtonColor: '#4a5568',
      confirmButtonText: 'تعديل',
      cancelButtonText: 'إلغاء'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.put(`${API}/${id}`, { price: price, category:category });
          getList();
          setupdating(!updating);
          Swal.fire('تم التعديل!', 'تم تحديث السعر بنجاح.', 'success');
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  const remove = async (id) => {
    Swal.fire({
      title: 'هل أنت متأكد؟',
      text: "تريد حذف هذا الطبق نهائيًا؟",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff4d4d', 
      cancelButtonColor: '#4a5568',   
      confirmButtonText: 'نعم، احذف!',
      cancelButtonText: 'إلغاء'
    }).then(async (result) => {
    
      if (result.isConfirmed) {
        try {
          await axios.delete(`${API}/${id}`);
          getList();
        
          Swal.fire('تم الحذف!', 'تم حذف الطبق بنجاح.', 'success');
        } catch (error) {
          console.log(error);
        }
      }
    });
  
  };
  return (
    <div className='foodcard'>
      <h3>{food.name}</h3>
    <img src={food.image[0]}/>
    <h4>{food.price}DT</h4>

    <div>{!isAdmin?<button onClick={(e)=>{e.preventDefault(); addToCart(food)}}>Add To Cart</button>:""}</div>

    {isAdmin? (< div className='admin-buttons'><button onClick={()=>remove(food.id)}>Remove</button>
                <button onClick={()=>afficher()}>Edit</button>
              </div>):""}
    {updating?<>Prix
                 <input type="number"  value={price} onChange={(event)=>setprice(event.target.value)}/>
                 Category 
                  <input type="text"  value={category} onChange={(event)=>setCategory(event.target.value)}/>
                <button onClick={()=>edit(food.id)}>Edit Price</button></>:""}
    </div>
    
  )
}

export default FoodCard