import React from 'react';
import './Footer.scss';
import FooterCard from '../../common-components/Footer-Card/FooterCard';
import bell from '../../images/footer/bell.svg';
import Button from '../../common-components/button/Button';
import { footerServicesData, socialMediaData } from '../../Data.js';
import logo from '../../images/header/logo.svg';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='bellnText'>
                <img src={bell} alt="bell" />
                <div className='list'>List your show</div>
                <div className='footer-desc'>Got a show, event, activity or a great experience? patner with us & get listen with BookMyShow</div>
            </div>
            <Button title="Contact Today!"/>
        </div>
        <div className='footer-services'>
            {
                footerServicesData.map((service,index)=><FooterCard service={footerServicesData} currentIndex={index}/>)
            }
        </div>
        <div className='align-logo'>
            <div className='just-border'></div>
            <img className='icon' src={logo} alt="logo"/>
            <div className='just-border'></div>
        </div>
        <div className='social-media-icons'>
            <div className='align-icons'>
                {
                    socialMediaData.map((image)=><img className='icon' src={image} alt="social media"/>)
                }
            </div>
        </div>
        <div className='copyRights'>Copyright 2023 @Bigtree entertainment Pvt Ltd. All Rights Reserved</div>
        <div className='copyRights'>The content an images provided used on this site are copyright protected and copyrights vests with the respective owners. The usage of content and images on this website are intended to promote the works of the artists</div>
        <div className='copyRights'>unathorized use is prohibited punishable by law</div>
    </div>
  )
}
