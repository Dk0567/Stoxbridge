import React from "react";

function Brokerage() {
  return (
    <div className='container'>
      <div className='row text-center p-5 mt-5 '>
        <div className='col-8 p-4 '>
          <a href='' style={{ textDecoration: "none" }}>
            <h3 className='fs-5 '>Brokerage</h3>
          </a>
          <ul
            className='text-muted'
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "15px" }}
          >
            <li>
              executed order (whichever is lower) Equity Futures: ₹20 or 0.03%
              per
            </li>
            <li>
              Equity Delivery: ₹0 (Free) Equity Intraday: ₹20 or 0.03% per
            </li>
            <li>
              executed order (whichever is lower) Equity Options: ₹20 per
              executed order (flat)
            </li>
            <li>
              Commodity Futures: ₹20 or 0.03% per executed order (whichever is
              lower){" "}
            </li>
            <li>Commodity Options: ₹20 per executed order (flat) </li>
          </ul>
        </div>
        <div className='col-4 p-4 '>
          <a href='' style={{ textDecoration: "none" }}>
            <h3 className='fs-5'>List of charges</h3>
          </a>
          <ul
            className='text-muted'
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "15px" }}
          >
            <li>Brokerage ₹0 (Free)</li>
            <li> ₹20 or 0.03% per executed order (whichever is lower)</li>
            <li> ₹20 or 0.03% per executed order (whichever is lower)</li>
            <li> Flat ₹20 per executed order</li>
            <li> ₹20 or 0.03% per executed order (whichever is lower)</li>
            <li>Call & Trade Charges ₹50 per order</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
