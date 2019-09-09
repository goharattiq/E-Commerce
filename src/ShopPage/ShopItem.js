import React from 'react'

const ShopItem=(props)=> {
  return (
    <div className="card">
    <img src={props.item.imageUrl} className="card-img-top" alt="Shop item"/>
    <div className="card-body">
      <p className="card-text text-muted">{props.item.name} <span className="float-right">${props.item.price}</span></p>
    </div>
    </div>
  )
}


export default ShopItem;