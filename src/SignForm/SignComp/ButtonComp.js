import React from 'react'


const ButtonComp = (props) => (
  <button className={`${props.cartItem?'btn btn-dark cart-button':''} ${props.isGoogle?'btn btn-primary mr-2':'btn btn-outline-dark mr-2'} `}
   onClick={props.onClick} type={props.type}>

    {props.children}
  </button>
);

export default ButtonComp;