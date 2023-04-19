import React, { useState } from 'react';
import './FilterCard.scss';
import FilterItem from '../FilterItem/FilterItem';

export default function FilterCard({languages,title}) {
    const [colorChange,setColorchange] = useState(false)
    const func = (colorChange)=>{
        return colorChange == true ? "details" : ""

    }
  return (
    <div className='filter-card'>
      <details className={func(colorChange)}>
        <summary onClick = {()=>setColorchange(!colorChange)} className='title'>{title}<span className='clear'>clear</span></summary>
        <div className='card-entries'>
        {
            languages.map((item)=><FilterItem item={item} style="sharp-border"/>)
        }
      </div>
    </details>
      
    </div>
  )
}
