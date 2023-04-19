import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.scss';
import { carouselData } from '../../Data.js';

export default function CarouselDisplay({carouselData}) {
  return (
    <div className='carousel'>
      <Carousel className='caro'>
        {
          carouselData.map((image)=>
            <Carousel.Item className='c-item'>
              <img
                className="d-block w-100"
                src={image}
                alt="Second slide"
              />
          </Carousel.Item>)
        }
    </Carousel>
    </div>
  )
}
