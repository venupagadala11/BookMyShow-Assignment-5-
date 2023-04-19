import React from 'react';
import './TrendingCard.scss'

export default function TrendingCard({currentIndex,searchedData}) {
  return (
    <div className='search-card'>
      <div className='title'>{searchedData[currentIndex].title}</div>
      <div className='category'>{searchedData[currentIndex].catogery}</div>
    </div>
  )
}
