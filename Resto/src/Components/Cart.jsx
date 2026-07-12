import React from 'react'
import '../CSS/Cart.css'

function Cart({cart,setCart,user}) {
  let s=0
  for (let i=0;i<cart.length;i++){
    s+=cart[i].price
  }
  const remove=(y)=>{
          setCart(card.filter((item)=>item.title!=y.title))

  }
  return (
    <div>
        {cart.map((item)=>( <div>{item.name} :     {item.price}    <bouton onClick={()=>remove(item)}>Remove</bouton></div> ))}
        
        <div id='total'>Total:{s} TND</div>
    </div>
  )
}

export default Cart

//const [foodToDisplay,setFoodToDisplay] = useState("")


