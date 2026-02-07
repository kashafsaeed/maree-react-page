import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='footer-content'>
          <h1>
            Your brand new folio with a professional Layout <br />
            collection and quite a cheerful <span> Personality! </span>
          </h1>
        </div>

        <button className='btn'>PURCHASE</button>


      </div>

      <div className='footer-bottom'>
        <div className='footer-bottom-content-img'>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-end-slider-img-1.png" alt="" />
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-end-slider-img-2-1.png" alt="" />
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/04/short-slider-rev-1-img-3.png" alt="" />
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-end-slider-img-5.png" alt="" />
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-end-slider-img-3.png" alt="" />

        </div>
        <div className='footer-bottom-content-img'>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-slider-img-2.png" alt="" style={{ width: "30px", height: "40px" }} />
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-end-slider-img-7.png" alt="" />

        </div>
      </div>




    </>
  );
}

export default Footer;
