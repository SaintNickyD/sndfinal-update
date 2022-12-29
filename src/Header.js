import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { FaShoppingBasket } from "react-icons/fa";
import { auth } from "./firebase";



function Header() {
  const [{ basket, user }, dispatch] = useStateValue('');
  

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  
  }


  return (
    <div className="header">
      <Link to="/">
        <div className="header__option">Home Base
        </div>
      </Link>
      <Link to="/store">
        <div className="header__option">$$$
        </div>
      </Link>
      <Link to="/setups">
        <div className="header__option">Gaming Setups
        </div>
      </Link>
      <Link to="/OnTop">
        <div className="header__option">OnTop Registry
        </div>
      </Link>
      <Link to={'/orders'}>
        <div
        className="header__option">Hello {!user ? 'Guest ' : user.email}
        </div>
      </Link>
      <Link to={!user && '/login'}>
        <div onClick={handleAuthenticaton}
         className="header__option">{user ? 'Sign Out' : 'Sign In'}
        </div>
      </Link>
      <Link to="/checkout">
        <div
          className="header__option"><FaShoppingBasket />
          <span className="header__basketCount"> - {basket?.length} -
          </span>
        </div>
      </Link>

    </div>


  );
}

export default Header;