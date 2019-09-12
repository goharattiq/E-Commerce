import React from 'react';
import ShopItem from './ShopItem';

const ShopList=(props)=> {
  return(
    <div className="row mx-5">
      <div className="card-group">
       {props.collection.items.filter((item,index)=>index<4)
       .map((item)=>{
        return (<ShopItem key={item.id} item={item}/>)
       })}
       </div>
       </div>
  )
}


export default ShopList;