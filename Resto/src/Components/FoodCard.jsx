import React from 'react'
import '../CSS/menu.css'
function FoodCard({key,food,addToCart}) {
  return (
    <div className='foodcard'>
      <h3>{food.name}</h3>
    <img src={food.images[0]}/>
    <h4>{food.price}DT</h4>
    <button onClick={()=>addToCart(food)}>Add To Cart</button>
    </div>
  )
}

export default FoodCard