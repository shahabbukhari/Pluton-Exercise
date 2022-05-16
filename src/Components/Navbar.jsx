import React, { useState } from "react";
import { Images } from "../contants";
import "./Navbar.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav>
        <img src={Images.logo} alt="" className="logo" />
        <div className="search-bar">
          <img src={Images.search} alt="" className="search-icon" />
          <input type="text" placeholder="Products, Pharmacists..." />
          <img src={Images.seetings} alt="" className="filter" />
        </div>
        <div className="user">
          <img src={Images.person} alt="" className="user-image" />
          <img src={Images.cart} alt="" className="user-cart" />
          <img src={Images.question} alt="" className="user-question" />
        </div>
        <img
          src={Images.sidebar}
          onClick={() => setToggle(true)}
          className="sidebar-img"
        />
      </nav>
      {toggle && (
        <div className="sideBar">
          <div className="logo-close">
            <img src={Images.logo} alt="" />
            <span onClick={() => setToggle(false)}>x</span>
          </div>
          <ul>
            {[
              "My Profile",
              "Wallet",
              "Cards",
              "Favorites",
              "Order History",
              "Settings",
              "logout",
            ].map((link) => (
              <li key={link}>
                <a href={`#${link}`} onClick={() => setToggle(false)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
