import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productiDescription,
  tryDemo,
  lernMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className='container mt-5'>
        <div className='row border-top p-5'>
          <div className='col-12 col-lg-6'>
            <img src={imageUrl} className='img-fluid' alt={productName} />
          </div>
          <div className='col-12 col-lg-6 p-4 mt-4 mt-lg-0'>
            <h1>{productName}</h1>
            <p>{productiDescription}</p>
            <div className='d-flex flex-column flex-md-row gap-3 mt-3'>
              <a href={tryDemo} className='text-decoration-none'>
                Try Demo <i className='fa-solid fa-arrow-right-long'></i>
              </a>
              <a href={lernMore} className='text-decoration-none'>
                Learn More <i className='fa-solid fa-arrow-right-long'></i>
              </a>
            </div>
            <div className='mt-4 d-flex flex-column flex-sm-row gap-3'>
              <a href={googlePlay}>
                <img
                  src='media/images/googlePlayBadge.svg'
                  className='img-fluid'
                  alt='Google Play'
                />
              </a>
              <a href={appStore}>
                <img
                  src='media/images/appstoreBadge.svg'
                  className='img-fluid'
                  alt='App Store'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
