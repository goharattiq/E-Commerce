import React from 'react';
import ButtonComp from '../SignForm/SignComp/ButtonComp';
import {connect} from 'react-redux';
import {addItem} from '../redux/cart/cart-action';

const ShopItem=( props)=> {
  return (
    <div className="card">
    <img src={props.item.imageUrl} className="card-img-top" alt="Shop item"/>
    <div className="card-body">
      <p className="card-text text-muted">{props.item.name} <span className="float-right">${props.item.price}</span></p>
    </div>
    
    <ButtonComp onClick={() => props.addItem(props.item)} cartItem>Add to Cart</ButtonComp>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(ShopItem);