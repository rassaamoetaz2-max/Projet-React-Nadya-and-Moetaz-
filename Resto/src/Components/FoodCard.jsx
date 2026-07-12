import React, { useState } from 'react'
import '../CSS/menu.css'
import axios  from 'axios'
import API from '../data/API'
function FoodCard({key,food,addToCart,getList}) {


  const[updating, setupdating]=useState(false)
  const[price,setprice]=useState(food.price)

 let  isAdmin=true
 let isUser=false
  const afficher=()=>{
    setupdating(!updating)
  }

  const edit=async(id)=>{try{
                    await axios.put(API/`${id}`,{price:price})
                    getList()
                    setupdating(!updating)

  }
  catch(error){console.log(error)}

  }
  const remove=async(id)=>{try{
      await axios.delete(`${API}/${id}`)
    getList()
}
catch(error){console.log(error)}

}
  return (
    <div className='foodcard'>
      <h3>{food.name}</h3>
    <img src={food.image[0]}/>
    <h4>{food.price}DT</h4>

    <div>{isUser?<button onClick={()=>addToCart(food)}>Add To Cart</button>:""}</div>

    {isAdmin? (< div className='admin-buttons'><button onClick={()=>remove(food.id)}>Remove</button>
                <button onClick={()=>afficher()}>Edit</button>
              </div>):""}
    {updating?<>Prix
                 <input type="number"  value={price} onChange={(event)=>setprice(event.target.value)}/>
                <button onClick={()=>edit(food.id)}>Edit Price</button></>:""}
    </div>
    
  )
}

export default FoodCard