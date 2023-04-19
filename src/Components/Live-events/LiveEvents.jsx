import React from 'react';
import img1 from '../../images/live-event/live-1.avif';
import img2 from '../../images/live-event/live-2.avif';
import img3 from '../../images/live-event/live-3.avif';
import img4 from '../../images/live-event/live-4.avif';
import img5 from '../../images/live-event/live-1.avif';
import './LiveEvents.scss'

export default function LiveEvents() {
  const liveEventsImages = [{image:img1},{image:img2},{image:img3},{image:img4},{image:img5}]
  return (
    <div className='live-events'>
      <div className='title'>Live Events</div>
      <div className='events'>
        {
          liveEventsImages.map((event)=><div ><img className='event' src={event.image} alt="live event image" /></div>)
        }
      </div>
    </div>
  )
}
