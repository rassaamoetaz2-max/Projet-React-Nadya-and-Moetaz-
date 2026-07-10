import React from 'react'
import '../CSS/Cart.css'

function Cart({cart,user}) {
  return (
    <div>
        {cart.map((item)=>{ <div>{item.images[0]} <div>{item.name}{}</div> </div>
})}
        
        <div id='total'>Total: TND</div>
    </div>
  )
}

export default Cart

//const [foodToDisplay,setFoodToDisplay] = useState("")


/* enti maak bech taamel list.map((item){w taffichi hne walle?}) */
// ki taamel fel button: onClick(()=>{setFoodToDisplay(ism el category)})



//le mela aamel kima mestensa dm1 taw nriglouh ken tfa923edtli el afte