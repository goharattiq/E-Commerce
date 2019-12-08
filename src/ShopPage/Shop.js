import React,{useEffect} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';


import {fetchCollectionStartAsync} from '../redux/shop/shop-action';
import CollecionOverviewContainer from './collection-overview-container';
import CollecionContainer from '../collection/collection-container';

const Shop =({match,fetchCollectionStartAsync}) => {
  
  useEffect(()=>{
    fetchCollectionStartAsync();
  },[fetchCollectionStartAsync])
      
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollecionOverviewContainer}/>
        <Route path={`${match.path}/:collectionId`} component={CollecionContainer}/>
      </div>
      
    )
}

const mapDispatchToProps = dispatch =>({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()) 
})

export default connect(null,mapDispatchToProps)(Shop);