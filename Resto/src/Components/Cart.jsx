import React from 'react'
import '../CSS/Cart.css'
import { useEffect, useState } from 'react'


function Cart({cart,setCart,user}) {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };






  ///
  console.log(cart);
  
  let s=0
  for (let i=0;i<cart.length;i++){
    s+=cart[i].price
  }
  const remove=(y)=>{
          setCart(cart.filter((item)=>item.name!=y.name))

  }
  return (
    <div className='cart-page'>
      
      <div className='cart'>
        

 <div>
           <div >
         {cart.map((item)=>{return <div> <div className="item" > <img className="img" src={item.image[0]}/>   <div className="item-details">{item.name} :     {item.price} </div>    <div ><button onClick={()=>remove(item)}>Remove</button></div> 
       </div>  </div>   })}
          
     
    </div>
        <div id='total'>Total:{s} TND</div> 
        </div>



        <div >
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24804.54176220566!2d10.245014301017006!3d36.880269195403805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b55eaaa8ab8d%3A0xf308763817ce3bd0!2sEl%20Firma%20Restaurant!5e0!3m2!1sen!2stn!4v1783851352723!5m2!1sen!2stn" 
        width="600"    
                 
           referrerpolicy="strict-origin-when-cross-origin"
                height= "250px"
        allowFullScreen=""
        loading="lazy"
      >
    </iframe>      
   {/*  /*  
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24804.54176220566!2d10.245014301017006!3d36.880269195403805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b55eaaa8ab8d%3A0xf308763817ce3bd0!2sEl%20Firma%20Restaurant!5e0!3m2!1sen!2stn!4v1783851352723!5m2!1sen!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
        width="100%"
        height= "250px"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      >
    </iframe>  */ }
    </div> 
   
      

      </div>  

       <div className="items">
        {cart.map((item)=>{return <div> <div className="item" > <img className="img" src={item.image[0]}/>   <div className="item-details">{item.name} :     {item.price} </div>   </div>  
        </div>   })}
          
     <div id='total'>Total:{s} TND</div> 

    </div>
        
 <div>
      {count === 0 ? (
        <button onClick={increase}>Add</button>
      ) : (
        <div className="counter">
          <button onClick={decrease}>−</button>
          <span>{count}</span>
          <button onClick={increase}>+</button>
        </div>
      )}
    </div>

    </div>
  )
}

export default Cart

//const [foodToDisplay,setFoodToDisplay] = useState("")


