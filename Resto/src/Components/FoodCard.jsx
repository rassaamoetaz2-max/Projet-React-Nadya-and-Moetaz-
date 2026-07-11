import React from 'react'
import '../CSS/menu.css'
function FoodCard(props) {


const add=(y)=>{
const nouvelle=[...props.cart,y]
props.setCard(nouvelle)
}


  return (
    <div className='foodcard'>
      <h3>{props.food.name}</h3>
    <img src={props.food.image[0]}/>
    <h4>{props.food.price}DT</h4><br></br>
    <div className='x'><button>More Details</button> <button onClick={()=>add(props.food)}>Buy</button></div>
    </div>
  )
}

export default FoodCard