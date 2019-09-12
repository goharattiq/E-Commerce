import React from 'react';
import {connect} from 'react-redux';
import {selectCollecton} from '../redux/shop/shop-selector';

import ShopItem from '../ShopPage/ShopItem';

const Collection = (props) => {
  return (
    <div className="row m-5">
    <div className="card-group">
    {props.collection.items.map((item)=>{
     return (<ShopItem key={item.id} item={item}/>)
    })}
    </div>
    </div>
)}

const mapStateToProp=(state,props)=>({
  collection:selectCollecton(props.match.params.collectionId)(state)
})


export default connect(mapStateToProp)(Collection);
