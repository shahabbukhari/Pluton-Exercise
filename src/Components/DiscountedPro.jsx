import React from "react";
import { Images } from "../contants";
import "./discountedpro.css";

function DiscountedPro() {
  return (
    <div className="feature-products">
      <div className="menu">
        <h2>Discounted Products</h2>
        <h2>Explore {">"}</h2>
      </div>
      <div className="products">
        <div className="dis-product">
          <img src={Images.med} alt="" />
          <div className="dis-product">
            <div className="dis-spec">
              <p className="dis-product-name">Paracetamol</p>
              <p className="dis-product-spec">N200</p>
              <p className="dis-product-code">N500</p>
              <p className="dis-product-by">Opeyemi Pharm</p>
            </div>
          </div>
        </div>
        <div className="dis-product">
          <img src={Images.med} alt="" />
          <div className="dis-product">
            <div className="dis-spec">
              <p className="dis-product-name">Paracetamol</p>
              <p className="dis-product-spec">N200</p>
              <p className="dis-product-code">N500</p>
              <p className="dis-product-by">Opeyemi Pharm</p>
            </div>
          </div>
        </div>
        <div className="dis-product">
          <img src={Images.med} alt="" />
          <div className="dis-product">
            <div className="dis-spec">
              <p className="dis-product-name">Paracetamol</p>
              <p className="dis-product-spec">N200</p>
              <p className="dis-product-code">N500</p>
              <p className="dis-product-by">Opeyemi Pharm</p>
            </div>
          </div>
        </div>
        <div className="dis-product">
          <img src={Images.med} alt="" />
          <div className="dis-product">
            <div className="dis-spec">
              <p className="dis-product-name">Paracetamol</p>
              <p className="dis-product-spec">N200</p>
              <p className="dis-product-code">N500</p>
              <p className="dis-product-by">Opeyemi Pharm</p>
            </div>
          </div>
        </div>
        <div className="dis-product">
          <img src={Images.med} alt="" />
          <div className="dis-product">
            <div className="dis-spec">
              <p className="dis-product-name">Paracetamol</p>
              <p className="dis-product-spec">N200</p>
              <p className="dis-product-code">N500</p>
              <p className="dis-product-by">Opeyemi Pharm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscountedPro;
