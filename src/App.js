import React,{useEffect} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';

import Home from './HomePage/Home';
import Shop from './ShopPage/Shop';
import Header from './Header/Header'
import SignForm from './SignForm/SignForm';
import CheckOut from './checkout/CheckOut';

import {checkUserSession} from './redux/user/user-thunk';
import {selectCurrentUser} from './redux/user/user-selector';


const App = ({checkUserSession,currentUser}) => {

  useEffect(()=>{
    const unSubscribe = checkUserSession();
    return ()=>{
      unSubscribe();
    }
  },[checkUserSession]);

      return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/shop" component={Shop}/>
        <Route exact path="/checkout" component={CheckOut}/>
        <Route exact path="/signin" render={()=>currentUser?(<Redirect to="/"/>):(<SignForm/>)}/>
      </Switch> 
        
    </div>
  );
}

const mapDispatchToProps=dispatch=>({
  checkUserSession: () => dispatch (checkUserSession())
})
const mapSateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})

export default connect(mapSateToProps,mapDispatchToProps)(App);