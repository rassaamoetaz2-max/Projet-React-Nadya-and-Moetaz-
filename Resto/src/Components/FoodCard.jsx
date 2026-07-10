import React from 'react'
import '../CSS/menu.css'
function FoodCard(props) {
  return (
    <div className='foodcard'>
      <h3>{props.food.name}</h3>
    <img src={props.food.images[0]}/>
    <h4>{props.food.price}DT</h4>
    </div>
  )
}

export default FoodCard