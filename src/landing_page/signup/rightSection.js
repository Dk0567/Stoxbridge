import React from "react";
function RightSection({ imageUrl }) {
  return (
    <div className='container mt-5'>
      <div className='row border-top mt-5 p-5'>
        <div className='col-6 mt-5 AC-benifit'>
          <h1>Unbeatable pricing</h1>
          <p className='mt-3'>
            Zero charges for equity & mutual fund investments. Flat ₹20 fees for
            intraday and F&O trades.
          </p>
          <h1>Best investing experience</h1>
          <p className='mt-3'>
            Simple and intuitive trading platform with an easy-to-understand
            user interface.
          </p>
          <h1>No spam or gimmicks</h1>
          <p className='mt-3'>
            Committed to transparency — no gimmicks, spam, "gamification", or
            intrusive push notifications.
          </p>
          <h1>The StoxBridge universe</h1>
          <p className='mt-3'>
            More than just an app — gain free access to the entire ecosystem of
            our partner products.
          </p>
        </div>
        <div className='col-6'>
          <img
            src={imageUrl}
            style={{ width: "95%" }}
            alt='Benefits Illustration'
          />
          <h1>Benefits of opening a StoxBridge demat account</h1>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
