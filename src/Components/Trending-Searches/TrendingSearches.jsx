import React from 'react';
import './TrendingSearches.scss';
import TrendingCard from '../../common-components/Trending-card/TrendingCard';

export default function TrendingSearches({searchedData}) {
  return (
    <div className='searches'>
        <div className='searches-title'>Treanding Searches Right Now</div>
        <div className="cards">
            {
                searchedData.map((item,index)=><TrendingCard searchedData={searchedData} currentIndex={index}/>)
            }
        </div>
      
    </div>
  )
}
