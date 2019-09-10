import React from 'react';

const CartItem=(props)=> {
  return (
      <div className="cart-item">
        <img src={props.item.imageUrl} className="cart-img" alt="cart item"/>
        <div className="item-details">
            <span className="name">{props.item.name}</span>
            <span className="price">
                {props.item.quantity}* ${props.item.price}
            </span>
        </div>
      </div>
    
  )
}

export default CartItem;
