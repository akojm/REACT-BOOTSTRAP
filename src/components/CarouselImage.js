import React from 'react';
import '../styles/carouselImage.css'
import { Carousel } from 'react-bootstrap';

const CarouselImage = () => {
    return (
    <div>
    <Carousel data-bs-theme="dark" className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../assets/img/dj-performance.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Our advices</h5>
          <p>Professionals at your service!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/img/man_640.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>A quality after-sales service.</h5>
          <p>The reliability of our equipment is recognized by our service providers..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/img/woman_640.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Our advisors at your service !</h5>
          <p>
          Professionals who make the difference.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            
        </div>
    );
};

export default CarouselImage;
