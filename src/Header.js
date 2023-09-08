import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase"

function Header() {
  const [{basket,user}] = useStateValue();

  const login = () =>{
    if(user) {
      auth.signOut();
    }
  }
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        ></img>
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/*3 links*/}
      <div className="headerNav">

        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__OptionLineOne">Hello,{user?.email}</span>
            <span className="header__OptionLineTwo">{user ? 'Sign Out':'Sign In'}</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__OptionLineOne">Returns</span>
            <span className="header__OptionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__OptionLineOne">Your</span>
            <span className="header__OptionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
          <span className="header__OptionLineTwo headerbasketCount">{basket?.length}</span>
          </div>
        </Link>

      </div>
    </nav>
  );
}

export default Header;
