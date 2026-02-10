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

        <div className='inner'>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-end-slider-img-1.png" alt="" className='side-leaf' />
        </div>
        <div className='textimage'>
          <div>
            <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-end-slider-img-3.png" alt="" className='bird' />
          </div>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-end-slider-img-2-1.png" alt="" className='text' />
          <div>
            <img src="\images\landing-slider-img-9.png" alt="" className='small' />
          </div>

        </div>
        <div className='boy'>
          <div>
            <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-end-slider-img-5.png" alt="" className='leaf' />

          </div>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/04/short-slider-rev-1-img-3.png" alt="" className='boy' />

        </div>
        <div className='side'>
          <img src="https://maree.qodeinteractive.com/wp-content/uploads/2019/05/landing-end-slider-img-7.png" alt="" className='side-leaf2' />

        </div>

      </div>






    </>
  );
}

export default Footer;
