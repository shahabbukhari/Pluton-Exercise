import React from "react";
import { Images } from "../contants";
import "./medical.css";

function Medical() {
  return (
    <div className="feature-products">
      <div className="menu">
        <h2>Medical Instruments</h2>
        <h2>Explore {">"}</h2>
      </div>
      <div className="products med-pro">
        {Array.from(Array(10).keys()).map((index) => (
          <div className="dis-product med" key={index}>
            <img src={Images.medical} alt="" />
            <div className="dis-spec">
              <p className="dis-product-name">Paracetamol</p>
              <p className="dis-product-spec">N200</p>
              <p className="dis-product-by">Opeyemi Pharm</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medical;
