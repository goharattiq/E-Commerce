import React from 'react';
import {connect} from 'react-redux';
import {addItem,removeItem,deleteItem} from '../redux/cart/cart-action';

const CheckoutItem = (props) => {
  return (
    <div className='card check-card'>
        <div className="row no-gutters">
            <div className="col-md-2">
                <img src={props.item.imageUrl} className="card-img w-100" alt="cart item"/>
            </div>
            <div className="ml-4 col-md-2">
                <div className="card-body">
                    <h5 className="pt-4 card-title">{props.item.name}</h5>
                </div>
            </div>
            <div className="ml-5 col-md-2">
                <div className="card-body">
                    <h5 className="pl-4 pt-4 card-title"><i className="fas fa-chevron-left cursor" onClick={()=>props.dispatch(removeItem(props.item))}></i>  {props.item.quantity}  <i className="fas fa-chevron-right cursor" onClick={()=>props.dispatch(addItem(props.item))}></i></h5>
                </div>
            </div>
            <div className="ml-5 col-md-2">
                <div className="card-body">
                    <h5 className="pl-2 pt-4 card-title">{props.item.price}</h5>
                </div>
            </div>
            <div className="col-md-2">
                <div className="card-body">
                    <h5 className="pl-4 pt-4 card-title"><i className="fas fa-times cursor" onClick={()=>props.dispatch(deleteItem(props.item))}></i></h5>
                </div>
            </div>
        </div>
    </div>


  )
}


export default connect()(CheckoutItem);
