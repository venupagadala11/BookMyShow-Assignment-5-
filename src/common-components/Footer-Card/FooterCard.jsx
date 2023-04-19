import React from 'react';
import './FooterCard.scss'

export default function FooterCard({service,currentIndex}) {
  return (
    <div className='footer-card'>
      <div className='service-image'><img className='card-image' src={service[currentIndex].src} alt="footer image" /></div>
      <div className='footerCard-desc'>{service[currentIndex].desc}</div>
    </div>
  )
}
