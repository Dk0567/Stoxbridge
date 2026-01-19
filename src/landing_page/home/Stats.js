import React from "react";

function Stats() {
  return (
    <div className='container py-5'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <h1 className='fs-2 mb-4'>Trust with confidence</h1>
          <h2 className='fs-5'>Customer-first always</h2>
          <p className='text-muted'>
            That's why 1.6+ crore customers trust StoxBridge with ~ ₹6 lakh
            crores of equity investments and contribute to 15% of daily retail
            exchange volumes in India.
          </p>
          <h2 className='fs-5'>No spam or gimmicks</h2>
          <p className='text-muted'>
            No gimmicks, spam, or annoying push notifications. High-quality apps
            that you use at your pace.
            <a href='#'> Our philosophies.</a>
          </p>
          <h2 className='fs-5'>The StoxBridge universe</h2>
          <p className='text-muted'>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer tailored services.
          </p>
          <h2 className='fs-5'>Do better with money</h2>
          <p className='text-muted'>
            With Nudge and Kill Switch, we actively help you make better
            financial decisions.
          </p>
        </div>
        <div className='col-md-6 text-center'>
          <img
            src='/media/images/ecosystem.png'
            className='img-fluid mb-3'
            alt='Ecosystem'
          />
          <div>
            <a href='#' className='d-block mb-2'>
              Explore our products{" "}
              <i className='fa-solid fa-arrow-right-long'></i>
            </a>
            <a href='#'>Try kit Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stats;
