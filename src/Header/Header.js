import React from 'react';
import {Link} from 'react-router-dom';
import {auth } from '../Firebase/firebase';
const Header=({currentUser})=> {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link  className="navbar-brand" to="/">
      <i className="fas fa-shopping-cart mr-3"></i>
        Apny Shop
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link  className="nav-link" to="/shop">
            Shop
            </Link>
          </li>
          {
            currentUser ?
            <li className="nav-item">
            <Link className="nav-link" onClick={()=>{auth.signOut()}}>
            Sign Out
            </Link>
          </li>  
          :
          <li className="nav-item">
            <Link  className="nav-link" to="/signin">
            Sign In
            </Link>
          </li>
          }    
        </ul>
    </div>
  </nav>


  )
}

export default Header;