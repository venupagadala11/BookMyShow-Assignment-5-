import React from 'react';
import {data,languages, genres, format, movieSectionData, movieSectionCarousel}  from '../../Data.js';
import FilterCard from '../../common-components/FilterCard/FilterCard.jsx';
import './MovieSection.scss';
import FilterItem from '../../common-components/FilterItem/FilterItem.jsx';
import Tabs from '../../common-components/Tabs/Tabs.jsx';
import coomingSoonImg from '../../images/movies-section/comming-soon.avif'
import EventComponent from '../../common-components/Event-Component/EventComponent.jsx';
import Carousel from '../../common-components/Carousel/Carousel';

export default function MovieSection() {
  return (
    <div>
      <Carousel carouselData={movieSectionCarousel}/>
      <div className='movies-section'>
        <div className='filters'>
          <div className='filter-title'>Filters</div>
          <FilterCard languages={languages} title='Languages'/>
          <FilterCard languages={genres} title='Genre'/>
          <FilterCard languages={format} title='Format'/>
          <FilterItem item="Browse by cinemas" style="curved-border"/>
        </div>
        <div className='movieSection-title'>
          <div className='movieSection-title'>Movies in Hyderabad</div>
          <Tabs navTabs={languages} style="rounded-border"/>
          <img className='soon-image' src={coomingSoonImg} alt="cooming soon"/>
          <EventComponent title="movies" moviesData={movieSectionData} style="movie-section"/>
        </div>
      </div>
    </div>
  )
}
