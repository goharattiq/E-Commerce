import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import ShopList from './ShopList';
import {selectCollectonsForPreview} from '../redux/shop/shop-selector';

const CollecionOverview = (props) => {
  const {collections}=props;
    return (
      <div>
        {collections.map((collection)=>{
           return (
               <div className="mt-5" key={collection.id}>
                   <h4 className="margin-title">{collection.title}</h4>
                   <ShopList collection={collection}/>
               </div>)  
        })}
      </div>
    )
}

const mapStateToProps=createStructuredSelector({
  collections:selectCollectonsForPreview
})

export default connect(mapStateToProps)(CollecionOverview);