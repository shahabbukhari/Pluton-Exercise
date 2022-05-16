import React from "react";
import "./Header.css";
import { Images } from "../contants";

function Header() {
  return (
    <div className="header">
      <div className="categories">
        <h1>Categories</h1>
        <ul>
          <li>
            <img src={Images.product} />
            <span>Buy Product</span>
          </li>
          <li>
            <img src={Images.doctor} />
            <span>See a Doctor</span>
          </li>
          <li>
            <img src={Images.lab} />
            <span>Lab Test</span>
          </li>
        </ul>
      </div>
      <div className="intro">
        <p>Hi Hydraxx,</p>
        <p>What would you like today?</p>
        <div className="blank"></div>
      </div>
    </div>
  );
}

export default Header;
