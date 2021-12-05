import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./Header.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useStateValue } from "../Stateprovider/Stateprovider";
// import Header2 from "./Header2";
import { Dropdown } from "react-bootstrap";
import HeaderLists from "./HeaderLists";
import Navbar from "./Navbar";

function Header(props) {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <div className="header__search">
          <div className="dropDown">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                All
                <ArrowDropDownIcon />
              </Dropdown.Toggle>
              <ul>
                <Dropdown.Menu>
                  <HeaderLists lists=" All Departments" />
                  <HeaderLists lists=" Arts & Crafts" />
                  <HeaderLists lists=" Automotive" />
                  <HeaderLists lists=" Baby" />
                  <HeaderLists lists=" Beauty & Personal care" />
                  <HeaderLists lists=" Books" />
                  <HeaderLists lists=" Computers" />
                  <HeaderLists lists=" Digital Music" />
                  <HeaderLists lists=" Electronics" />
                  <HeaderLists lists=" Kindle store" />
                  <HeaderLists lists=" Prime Video" />
                  <HeaderLists lists=" Women's Fashion" />
                  <HeaderLists lists=" Mens Fasion" />
                  <HeaderLists lists=" Girls Fasion" />
                  <HeaderLists lists=" Boys Fasion" />
                  <HeaderLists lists=" Deals" />
                  <HeaderLists lists=" Health & Household" />
                  <HeaderLists lists=" Home & Kichen" />
                  <HeaderLists lists=" indestrial & Scientific" />
                </Dropdown.Menu>
              </ul>
            </Dropdown>
          </div>
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"} className="header__clearlink">
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders" className="header__clearlink">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout" className="header__clearlink">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
     
        <Navbar  />
     

    </div>
  );
}

export default Header;
