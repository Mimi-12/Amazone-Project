import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars
              // onClick={showSidebar}
            />
          </Link>
          <h3>All</h3>
          <div className="Header-Options">
            {/* <FormatAlignJustifyIcon className="Header-First" /> */}

            {/* <h5 className="Header-First">prime</h5> */}
            {/* <ArrowDropDownIcon className="Header-First" /> */}
            <ul>
              <li>
                <Link to="/Login" className="link">
                  Your Amazon.sa
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Sell
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Help
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Perfumes
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Mobile Phones
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Supermarket
                </Link>
              </li>
              <li>
                <Link to="#" className="link-covid">
                  Amazon's response to COVID-19
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
                <h1>fgggg</h1>;
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
