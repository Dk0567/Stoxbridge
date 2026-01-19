import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LeftSection({ imageUrl }) {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState();
  const [email, setemail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to backend
    try {
      const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, email }),
      });

      const data = await res.json();
      alert("Signup success: " + data.message);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };
  return (
    <>
      <div className='container mt-5'>
        <div className='row border-top mt-5 p-5'>
          <div className='col-6'>
            <img
              src='media/images/signup.png'
              style={{ width: "95%" }}
              alt='Signup Illustration'
            />
          </div>
          <div className='col-6 mt-5'>
            <h1>Signup now</h1>
            <span className='text-muted fs-5'>
              Or track existing application
            </span>
            <form className='mt-4 signup' onSubmit={handleSubmit}>
              <input
                type='tel'
                id='mobile'
                name='mobile'
                value={mobile}
                maxLength='10'
                pattern='[0-9]{10}'
                placeholder='Enter your mobile number'
                onChange={(e) => setMobile(e.target.value)}
                required
                className='form-control mb-3'
              />
              <input
                type='email'
                value={email}
                id='email'
                name='email'
                placeholder='Enter your Email'
                onChange={(e) => setemail(e.target.value)}
                required
                className='form-control mb-3'
              />
              <button type='submit'  className='btn btn-primary fs-5'>
                Signup
              </button>
            </form>
            <p className='mt-3'>
              By proceeding, you agree to the StoxBridge <br />
              <a href='#'>terms</a> & <a href='#'>privacy policy</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default LeftSection;
