import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import ButtonComp from '../SignForm/SignComp/ButtonComp';
import CartItem from './CartItem';
import {selectCartItems} from '../redux/cart/cart-selectors';
import {toggleCartHidden} from '../redux/cart/cart-action';


const Cart=(props)=> {
  return (
     <div className="cart-dropdown">
       <div className="cart-items">
       {
         !props.cartItems.length?
       <div className="alert alert-danger mt-5" role="alert">
         Your Cart is Empty
       </div>:
         props.cartItems.map((item)=>{
           return(
            <CartItem key={item.id} item={item}/>
            )
         })
       }
       </div>
          <ButtonComp onClick={()=>{props.history.push("/checkout");
        props.dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</ButtonComp>
     </div>
  )
}

const mapStateToProps=createStructuredSelector({
  cartItems: selectCartItems
})



export default withRouter(connect(mapStateToProps)(Cart)); 