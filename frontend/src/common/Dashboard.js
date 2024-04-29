import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Fotter from './Footer';
import { FaHandshake } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import image1 from '../img/bg 1.jpg';
import image2 from '../img/bg 2.jpg';
import image3 from '../img/bg 3.jpg';

function UncontrolledExample() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ fontSize: '64px' }}>Join With Us</h3>
            <p style={{ fontSize: '20px' }}>We make so many opportunities for you to socialize.</p>
            <div className='buttons'>
              <NavLink to="/login" className="btn btn-outline-success px-4 rounded-pill" style={{ fontSize: '20px' }}>GET STARTED</NavLink>
            </div>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 style={{ fontSize: '64px' }}>Join With Us</h3>
            <p style={{ fontSize: '20px' }}>Attending networking events can provide you with many opportunities to socialize and build professional relationships.</p>
            <div className='buttons'>
              <NavLink to="/login" className="btn btn-outline-success px-4 rounded-pill " style={{ fontSize: '20px' }}>GET STARTED</NavLink>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3  style={{ fontSize: '64px' }}>Join With Us</h3>
            <p style={{ fontSize: '20px' }}>Going to a party or gathering with friends can be a fun way to socialize and meet new people.</p>
            <div className='buttons'>
              <NavLink to="/login" className="btn btn-outline-success px-4 rounded-pill" style={{ fontSize: '20px' }}>GET STARTED</NavLink>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Fotter />
    </div>
  );
}

export default UncontrolledExample;
