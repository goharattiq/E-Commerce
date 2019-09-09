import React, { Component } from 'react';
import Shop_Data from './Shop_Data';
import ShopList from './ShopList'

class Shop extends Component {
  constructor(props){
      super(props)
      this.state={
          collections:Shop_Data
      }
  }

  render() {
      const {collections}=this.state;
    return (
      <div>
        {collections.map((collection)=>{
           return (
               <div className="mt-5">
                   <h4 className="ml-3">{collection.title}</h4>
           <ShopList collection={collection}/>
           </div>)  
        })}
      </div>
    )
  }
}

export default Shop;