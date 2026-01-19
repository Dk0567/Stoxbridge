import React from "react";

function CreateTicket() {
  return (
    <div className='container'>
      <div className='row p-5 mt-5 mb-5'>
        <h1 className='fs-4 text-muted'>
          To create a ticket, select a relevant topic
        </h1>

        <div className='col-4 p-5 mt-2 mb-2'>
          <h4 className='fs-5'>
            <i className='fa-solid fa-circle-plus'></i> Account Opening
          </h4>
          <a href=''>Resident individual</a>
          <br />
          <a href=''>Minor</a>
          <br />
          <a href=''>Non Resident Indian (NRI)</a>
          <br />
          <a href=''>Company, Partnership, HUF and LLP</a>
          <br />
          <a href=''>Glossary</a>
        </div>

        <div className='col-4 p-5 mt-2 mb-2'>
          <h4 className='fs-5'>
            <i className='fa-regular fa-user'></i> Your StoxBridge Account
          </h4>
          <a href=''>Your Profile</a>
          <br />
          <a href=''>Account modification</a>
          <br />
          <a href=''>
            Client Master Report (CMR) and Depository Participant (DP)
          </a>
          <br />
          <a href=''>Nomination</a>
          <br />
          <a href=''>Transfer and conversion of securities</a>
        </div>

        <div className='col-4 p-5 mt-2 mb-2'>
          <h4>
            <i className='fa-solid fa-money-bill-trend-up'></i> Kite
          </h4>
          <a href=''>IPO</a>
          <br />
          <a href=''>Trading FAQs</a>
          <br />
          <a href=''>Margin Trading Facility (MTF) and Margins</a>
          <br />
          <a href=''>Charts and orders</a>
          <br />
          <a href=''>Alerts and Nudges</a>
          <br />
          <a href=''>General</a>
        </div>

        <div className='col-4 p-5 mt-2 mb-2'>
          <h4 className='fs-5'>
            <i className='fa-solid fa-credit-card'></i> Funds
          </h4>
          <a href=''>Add money</a>
          <br />
          <a href=''>Withdraw money</a>
          <br />
          <a href=''>Add bank accounts</a>
          <br />
          <a href=''>eMandates</a>
        </div>

        <div className='col-4 p-5 mt-2 mb-2'>
          <h4 className='fs-5'>
            <i className='fa-solid fa-circle-notch'></i> Console
          </h4>
          <a href=''>Portfolio</a>
          <br />
          <a href=''>Corporate actions</a>
          <br />
          <a href=''>Funds statement</a>
          <br />
          <a href=''>Reports</a>
          <br />
          <a href=''>Profile</a>
          <br />
          <a href=''>Segments</a>
        </div>

        <div className='col-4 p-5 mt-2 mb-2'>
          <h4 className='fs-5'>
            <i className='fa-solid fa-coins'></i> Coin
          </h4>
          <a href=''>Mutual funds</a>
          <br />
          <a href=''>National Pension Scheme (NPS)</a>
          <br />
          <a href=''>Features on Coin</a>
          <br />
          <a href=''>Payments and Orders</a>
          <br />
          <a href=''>General</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
