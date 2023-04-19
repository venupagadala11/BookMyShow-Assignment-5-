import React from 'react';
import './button.scss'

export default function Button({title}) {
  return (
    <div>
      <button id='button'>{title}</button>
    </div>
  )
}
