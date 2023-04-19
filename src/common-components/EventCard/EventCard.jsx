import React from 'react';
import "./EventCard.scss";
import fndf from '../../images/movies/fast-x.avif';

export default function EventCard({moviesData,currentIndex}) {
  return (
    <div className='card'>
      <div >
        <img className='card-image' src={moviesData[currentIndex].src} alt="Fast and Furious" />
      </div>
      <div className='card-details'>
          <div className='card-title'>{moviesData[currentIndex].name}</div>
          <div className='card-desc'>{moviesData[currentIndex].desc}</div>
      </div>
    </div>
  )
}
