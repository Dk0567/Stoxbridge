import React from "react";

function RightSection({
  imageUrl,
  productName,
  productiDescription,
  lernMore,
}) {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5 mt-5'>
          <h1>{productName}</h1>
          <p>{productiDescription}</p>
          <div>
            <a href={lernMore} style={{ textDecoration: "none" }}>
              lernMore <i className='fa-solid fa-arrow-right-long'></i>
            </a>
          </div>
        </div>
        <div className='col-6'>
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
