import React from 'react';
import './FilterItem.scss'

export default function FilterItem({item,style}) {
  return (
    <div>
      <div className={style}>{item}</div>
    </div>
  )
}
