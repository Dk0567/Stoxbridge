import React from "react";
function Awards() {
  return (
    <div className='container mt-5 p-3'>
      <div className='row align-items-center'>
        <div className='col-md-6 text-center mb-4 mb-md-0'>
          <img
            src='/media/images/largestBroker.svg'
            alt='Largest Broker'
            className='img-fluid'
          />
        </div>
        <div className='col-md-6'>
          <h1>Largest Stock Broker in India</h1>
          <p>
            2+ million StoxBridge clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className='row'>
            <div className='col-6'>
              <ul>
                <li>Future and options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className='col-6'>
              <ul>
                <li>Stocks and IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt securities</li>
              </ul>
            </div>
          </div>
          <img
            src='/media/images/pressLogos.png'
            alt='Press'
            className='img-fluid mt-3'
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
