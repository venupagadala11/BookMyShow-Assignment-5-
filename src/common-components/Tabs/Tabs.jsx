import React from 'react';
import './Tabs.scss'

export default function Tabs({navTabs,style}) {
  return (
    <div>
      <div className='tabs-bar'>
        {
            navTabs.map((tab)=><div  className={style}>{tab}</div>)
        }
      </div>
    </div>
  )
}
// onClick={()=>{handleTabClick()}}