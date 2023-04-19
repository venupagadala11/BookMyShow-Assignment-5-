import React from 'react';
import EventComponent from '../../common-components/Event-Component/EventComponent';
import LiveEvents from '../Live-events/LiveEvents';
import Premiere from '../Premiere/Premiere';
import reel from '../../images/New folder/home-page.avif';
import {data,searchedData,funEvents,carouselData}  from '../../Data.js';
import eventsData  from '../../Data.js';
import TrendingSearches from '../Trending-Searches/TrendingSearches';
import Carousel from '../../common-components/Carousel/Carousel';

export default function HomePage() {
  return (
    <div>
      <Carousel carouselData={carouselData}/>
      <EventComponent title="Recomended Movies " moviesData={data} style="card-container"/>
      <div class="reel"><img className='reel-img' src={reel}/></div>
      <LiveEvents/>
      <Premiere/>
      <EventComponent title="Events Happening near you" moviesData={eventsData} style="card-container"/>
      <TrendingSearches searchedData={searchedData}/>
      <EventComponent moviesData={funEvents} title="Explore Fun Activities" style="card-container"/>
    </div>
  )
}
