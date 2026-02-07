import React from 'react'
import './Featuers.css'
function Features() {
  return (
    <div className='features-container'>

      <div className="features">
        <div className="features-image">
          <img src="/images/main-home.jpg" alt="Main Home" />
        </div>

        <div className="features-content">
          <h2>Main Home</h2>
        </div>
      </div>

      <div className="features">
        <div className="features-image">
          <img src="/images/floating.jpg" alt="Floating" />
        </div>
        <div className="features-content">
          <h2>Floating Portfolio</h2>
        </div>
      </div>
      <div>

        <div className="features">
          <div className="features-image">
            <img src="/images/portfolio.jpg" alt="portfolio" />
          </div>
          <div className="features-content">
            <h2> Portfolio Pinterest</h2>
          </div>
        </div>
      </div>


      <div className="features">
        <div className="features-image">
          <img src="/images/animated slider.jpg.jpg" alt="slider" />
        </div>
        <div className="features-content">
          <h2> Animated Slider</h2>
        </div>
      </div>

      <div className="features">
        <div className="features-image">
          <img src="/images/metro.jpg" alt="metro" />
        </div>
        <div className="features-content">
          <h2> Portfolio Metro</h2>
        </div>
      </div>

      <div className="features">
        <div className="features-image">
          <img src="/images/gallery.jpg" alt="gallery" />
        </div>
        <div className="features-content">
          <h2> Portfolio Gallery</h2>
        </div>
      </div>


      <div className="features-last" >
        <div className="features-image-last">
          <img src="/images/links.jpg" alt="links" />
        </div>
        <div className="features-content-last">
          <h2> Interactive Links</h2>
        </div>
      </div>


      <div className="features">
        <div className="features-image">
          <img src="/images/showcase.jpg" alt="showcase" />
        </div>
        <div className="features-content">
          <h2> Split Slider Showcase</h2>
        </div>
      </div>

      <div className="features-last">
        <div className="features-image-last">
          <img src="/images/carousel.jpg" alt="carosel" />
        </div>
        <div className="features-content-last">
          <h2> Portfolio Carousel</h2>
        </div>
      </div>





    </div>

  )
}

export default Features


