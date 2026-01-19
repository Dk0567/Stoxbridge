import React from "react";

function Pricing() {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-4'>
          <h1 className='fs-2'>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href='#'>
            See Pricing <i className='fa-solid fa-arrow-right-long'></i>
          </a>
        </div>
        <div className='col-md-2'></div>
        <div className='col-md-6'>
          <div className='row text-center'>
            <div className='col-6 border p-3'>
              <h2>$0</h2>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className='col-6 border p-3'>
              <h2>$20</h2>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
