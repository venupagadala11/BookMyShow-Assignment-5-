import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import EventCard from '../EventCard/EventCard';
import './EventComponent.scss'

export default function EventComponent({title,moviesData, style}) {
  return (
    <div className={style}>
     <div>
        <div className='title'>{title}</div>
      <div className="cards-align">
        {
          moviesData.map((movie,index)=><EventCard moviesData={moviesData} currentIndex={index} style={style}/>)
        }
      </div>
     </div>
    </div>
  )
}
