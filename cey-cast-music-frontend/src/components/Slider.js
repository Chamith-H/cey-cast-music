import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image2 from '../images/image2.jpg';
import slider1 from '../images/Slider1.png';
import image3 from '../images/image3.jpg';
import mb1 from '../images/mb1.jpg'
import mb3 from '../images/mb3.jpg'
import '../styles/carousel.css'



export default function Slider() {
  return (
    
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mb1}
          alt="First slide"
          style={{borderRadius:"20px"}}
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mb3}
          alt="Second slide"
          style={{borderRadius:"20px"}}
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mb1}
          alt="Third slide"
          style={{borderRadius:"20px"}}
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mb3}
          alt="First slide"
          style={{borderRadius:"20px"}}
        />
       
      </Carousel.Item>
    </Carousel>
    
  )
}
