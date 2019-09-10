import React from 'react';
import ShopItem from './ShopItem'

const ShopList=(props)=> {
  return(
      <div className="card-group">
       {props.collection.items.filter((item,index)=>index<4)
       .map((item)=>{
        return (<ShopItem key={item.id} item={item}/>)
       })}
       </div>
  )
}


export default ShopList;