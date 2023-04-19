import React from 'react';
import './Premiere.scss'
import logo from '../../images/premiere/logo.avif';
import m1 from '../../images/premiere/m-1.avif';
import m2 from '../../images/premiere/m2.avif';
import m3 from '../../images/premiere/m3.avif';
import m4 from '../../images/premiere/m4.avif';
import m5 from '../../images/premiere/m5.avif';
import EventCard from '../../common-components/EventCard/EventCard';

export default function Premiere() {
    const premiereData = [
    {name:'Black Adam',desc:'English',src:m1},
    {name:'Collection',desc:'English/Hindi',src:m2},
    {name:'lullaby',desc:'English/Telugu',src:m3},
    {name:'American Murderer',desc:'English/Hindi',src:m4},
    {name:'Slider',desc:'English/Tamil',src:m5}
    ]
  return (
    <div className='premiere'>
        <div>
            <img className='logo' src={logo} alt="premiere logo" />
        </div>
        <div className='title'>Fast and Furious</div>
        <div className='desc'>Brand new releases every Friday</div>
        <div className="cards-align">
            {
            premiereData.map((movie,index)=><EventCard moviesData={premiereData} currentIndex={index} style="card-container"/>)
            }
        </div>
      
    </div>
  )
}
