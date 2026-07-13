import React, { useState } from 'react'
import '../CSS/Cart.css'

function Cart({ cart, setCart, user }) {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const getQuantity = (item) => {
    if (item.quantity === undefined || item.quantity === null || item.quantity < 1) {
      return 0; 
    } else {
      return item.quantity; 
    }
  };


  let defaultSubtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    const currentQty = getQuantity(cart[i]);
    defaultSubtotal += cart[i].price * currentQty;
  }

  const defaultDeliveryFee = cart.length > 0 ? 7 : 0;
  const totalRaw = defaultSubtotal + defaultDeliveryFee;

  const subtotal = defaultSubtotal.toFixed(2);
  const deliveryFee = defaultDeliveryFee.toFixed(2);
  const total = totalRaw.toFixed(2);

  const remove = (targetItem) => {
    setCart(cart.filter((item) => item.name !== targetItem.name));
  };

  const changeQty = (targetItem, amount) => {
    setCart(cart.map((item) => {
      if (item.name === targetItem.name) {
        const currentQty = getQuantity(item);
        let newQty = currentQty + amount;
        
        if (newQty < 1) newQty = 0;
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter((item)=>item.quantity!==0));
  };

  const handleCheckout = () => {
    if (!phone || !address) {
      alert("Please enter your phone number and address before submitting!");
      return;
    }
    alert(`Order Placed successfully! Total: ${total} TND. Pay cash on arrival.`);
  };

  return (
    <div className='cart-page'>
      
      <div className='cart'>
        <h3>📍 Checkout Details</h3>
        
        <div className="input">
          <label>Phone Number *</label>
          <input 
            type="tel" 
            placeholder="e.g., +216 55 555 555" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
          />
        </div>

        <div className="input">
          <label>Delivery Address *</label>
          <input 
            type="text" 
            placeholder="Street name, Apartment, City..." 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
          />
        </div>

        <h3>💳 Payment Method</h3>
        <p className="pay">💰 Cash on Delivery (Pay when food arrives)</p>

        <div className="map">
          <iframe
            src="https://google.com" 
            width="100%" 
            height="180px" 
            loading="lazy" 
            style={{ border: 0, borderRadius: '8px' }}
          ></iframe>      
        </div>
      </div>  

      <div className="items">
        <h3>📋 Order Summary</h3>
        
        <div className="item-list">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => {
              const displayQty = getQuantity(item);
              const itemTotalPrices = (item.price * displayQty).toFixed(2);
              return (
                <div className="compact-item" key={item.name}> 
                  <div className="item-left-side">
                    <span className="qty">{displayQty}x</span>
                    <span>{item.name}</span>
                  </div>
                  
                  <div className="item-right-side">
                    <span>{itemTotalPrices} TND</span>
                    <button onClick={() => changeQty(item, 1)}>+</button>
                    <button onClick={() => changeQty(item, -1)}>-</button>
                    <button className="del" onClick={() => remove(item)}>✕</button>
                  </div>
                </div>  
              )
            })
          )}
        </div>

        <div className="totals">
          <div>Subtotal: {subtotal} TND</div>
          {cart.length > 0 && <div>Delivery: {deliveryFee} TND</div>}
          <div className="total">Total: {total} TND</div>
        </div>

        <button 
          className="submitOrder" 
          onClick={handleCheckout}
          disabled={cart.length === 0}
          style={{ opacity: cart.length === 0 ? 0.5 : 1 }}
        >
          Confirm & Pay Order
        </button>
      </div>

    </div>
  )
}

export default Cart
