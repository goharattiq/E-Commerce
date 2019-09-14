import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';


import {fetchCollectionStartAsync} from '../redux/shop/shop-action';
import CollecionOverviewContainer from './collection-overview-container';
import CollecionContainer from '../collection/collection-container';

class Shop extends Component{
  unsubscribeFromSnapshot = null;
  componentDidMount(){
      this.props.fetchCollectionStartAsync();
  }
 
   render(){
    const {match}=this.props; 
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollecionOverviewContainer}/>
        <Route path={`${match.path}/:collectionId`} component={CollecionContainer}/>
      </div>
      
    )}
}

const mapDispatchToProps = dispatch =>({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()) 
})

export default connect(null,mapDispatchToProps)(Shop);