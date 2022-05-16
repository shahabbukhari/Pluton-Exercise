import React from "react";
import { Images } from "../contants";
import "./FeaturePro.css";

function Feature() {
  return (
    <div className="feature-products">
      <div className="menu">
        <h2>Featured Products</h2>
        <h2>Explore {">"}</h2>
      </div>
      <div className="products">
        <div className="product">
          <div className="spec">
            <p className="product-name">Sivoketoconazole</p>
            <p className="product-spec">200 Bottles</p>
            <p className="product-code">N11500</p>
            <p className="product-by">Tuyil Pharmacy</p>
          </div>
          <img src={Images.productImag} alt="" />
        </div>
        <div className="product">
          <div className="spec">
            <p className="product-name">Sivoketoconazole</p>
            <p className="product-spec">200 Bottles</p>
            <p className="product-code">N11500</p>
            <p className="product-by">Tuyil Pharmacy</p>
          </div>
          <img src={Images.productImag} alt="" />
        </div>
        <div className="product">
          <div className="spec">
            <p className="product-name">Sivoketoconazole</p>
            <p className="product-spec">200 Bottles</p>
            <p className="product-code">N11500</p>
            <p className="product-by">Tuyil Pharmacy</p>
          </div>
          <img src={Images.productImag} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Feature;
