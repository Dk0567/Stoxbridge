import React from "react";

function Hero() {
  return (
    <div className='container-fluid' id='SupportHero'>
      <div className='p-3 Supportedi-line' id='SupportWrapper'>
        <h3>Support Portal</h3>
        <a href=''>Track tickets</a>
      </div>
      <div className='row p-5 m-5 py-5'>
        <div className='col-md-6 p-5'>
          <h1 className='fs-3'>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className='form-control mt-3'
            placeholder='Eg. how do I activate F&O, why is my order getting rejected...'
          />
          <div className='Supportedi-line mt-4 d-flex flex-column gap-2'>
            <a href=''>Track account opening</a>
            <a href=''>Track segment activation</a>
            <a href=''>Intraday margins</a>
            <a href=''>Kite user manual</a>
          </div>
        </div>
        <div className='col-md-6 p-5 py-5'>
          <h1>Featured</h1>
          <ol className='Supportedi-line'>
            <li>
              <a href=''>Adjustment of F&O contracts of PNB due to dividend</a>
            </li>
            <li>
              <a href=''>Rights Entitlements listing in June 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
