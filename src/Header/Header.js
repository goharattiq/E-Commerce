import React from 'react';
import {Link} from 'react-router-dom';
import {auth } from '../Firebase/firebase';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import CartIcon from '../cartIcon/CartIcon';
import Cart from './../Cart/Cart';
import {selcetCartHidden} from '../redux/cart/cart-selectors';
import {selectCurrentUser} from '../redux/user/user-selector';

const Header=({currentUser,hidden})=> {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link  className="navbar-brand pt-3" to="/">
      <i className="fas fa-shopping-cart mr-3"></i>
        Apny Shop
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link  className="nav-link pt-3" to="/shop">
            Shop
            </Link>
          </li>
          {
            currentUser ?
            <li className="nav-item">
            <Link className="nav-link pt-3" onClick={()=>{auth.signOut()}}>
            Sign Out
            </Link>
          </li>  
          :
          <li className="nav-item">
            <Link  className="nav-link pt-3" to="/signin">
            Sign In
            </Link>
          </li>
          }  
              <CartIcon/>
        </ul>
        {
          !hidden?<Cart/>:null
        }
    </div>
  </nav>


  )
}

const mapSateToProps=createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden : selcetCartHidden
})

export default connect(mapSateToProps)(Header);