import React from 'react';
import {ReactComponent as ShoppingIcon} from './shopping-bag.svg';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../redux/cart/cart-action';
import {selectCartItemsCount} from './../redux/cart/cart-selectors';


const CartIcon=(props)=> {
  return (
    <div className="cart-icon" onClick={props.toggleCartHidden}>
           <ShoppingIcon className="shopping-icon"/>
           <span className="item-count">{props.itemConunt}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch=>({
  toggleCartHidden:()=>{dispatch(toggleCartHidden())}
})

const mapStateToProps = createStructuredSelector({
  itemConunt : selectCartItemsCount
})


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);