import React from 'react';
import {Route} from 'react-router-dom';

import CollecionOverview from './CollectionOverview';
import Collection from '../collection/Collection';

const Shop = ({match}) => {
   return (
      <div>
        <Route exact path={`${match.path}`} component={CollecionOverview}/>
        <Route path={`${match.path}/:collectionId`} component={Collection}/>
      </div>
      
    )
}

export default Shop;