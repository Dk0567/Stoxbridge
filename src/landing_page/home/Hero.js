import React from "react";

function Hero() {
  return (
    <div className='container py-5 mb-5 text-center'>
      <img
        src='/media/images/homeHero.png'
        alt='Hero'
        className='img-fluid mb-4'
        style={{ maxHeight: "550px", width: "100%" }}
      />
      <h1 className='mt-4'>Invest in everything</h1>
      <p>
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds, and more.
      </p>
      <div className='d-grid gap-1 col-12 col-sm-6 mx-auto'>
        <button
          className='btn btn-primary fs-5'
          to='http://localhost:3000/signup'
        >
          Signup for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
