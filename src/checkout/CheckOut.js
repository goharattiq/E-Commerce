import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CheckoutHeader from './CheckoutHeader';
import CheckoutItem from './CheckoutItem';
import {selectCartItems,selectCartTotalPrice} from '../redux/cart/cart-selectors';
import Stripe from '../stripe/Stripe'
const CheckOut = (props) => {
  return (
    <div className="container mt-5 mr-5">
      <CheckoutHeader/>
      <hr className="ml-3 horizontal-line"/>
      {
           !props.cartItems.length?
           <div className="alert alert-danger mt-5 ml-5 w-50" role="alert">
             Your Cart is Empty
           </div>:
             props.cartItems.map((item)=>{
               return(
                <CheckoutItem key={item.id} item={item}/>
                )
             })
    }
      <hr className="ml-3 horizontal-line"/>
      <h5 className='float-right total-price'>Total Price : ${props.TotalPrice} </h5>
      <Stripe  price={props.TotalPrice}/>  
    </div>
  )
}

const mapStateToProps=createStructuredSelector({
    cartItems: selectCartItems,
    TotalPrice:selectCartTotalPrice
  })

export default connect(mapStateToProps)(CheckOut);
