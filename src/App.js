import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';

import Home from './HomePage/Home';
import Shop from './ShopPage/Shop';
import Header from './Header/Header'
import SignForm from './SignForm/SignForm';
import CheckOut from './checkout/CheckOut';

import {auth,createUserProfileDocument} from './Firebase/firebase';
import {setCurrentUser} from './redux/user/user-actions';
import {selectCurrentUser} from './redux/user/user-selector';


class App extends Component  {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }
      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
      return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/shop" component={Shop}/>
        <Route exact path="/checkout" component={CheckOut}/>
        <Route exact path="/signin" render={()=>this.props.currentUser?(<Redirect to="/"/>):(<SignForm/>)}/>
      </Switch>
        
    </div>
  );
  }
}

const mapDispatchToProps=dispatch=>({
  setCurrentUser: user => dispatch (setCurrentUser(user))
})
const mapSateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})
export default connect(mapSateToProps,mapDispatchToProps)(App);
