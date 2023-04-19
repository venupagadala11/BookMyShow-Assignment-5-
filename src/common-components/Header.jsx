import React from 'react';
import { useState } from 'react';
import logo from '../images/header/logo.svg';
import menu from '../images/header/menu.svg';
import search from '../images/header/Search.svg';
import hyd from '../images/header/hyd.png'
import "./Header.scss";
import Button from './button/Button';
import Tabs from './Tabs/Tabs';

export default function Header() {
    const cities =[{name:'Mumbai'},{name:'Delhi'},{name:'HYD'},{name:'Chennai'},{name:'BNGLR'},{name:'Jaipur'},{name:'Kolkata'}];
    const navTabs=['Movies', 'Stream', 'Events', 'Plays', 'Sports','Activites','Buzz'];
    const extraNavTabs =['ListYouShows','corporate','Offers','gift cards']
    const getMeToTheHomePage=()=>
    {

    }
  return (
    <div>
        <div className="header">
            <img className='logo' onClick={getMeToTheHomePage()} src={logo} alt="app logo"/>
            <div className="header-searchBar">
                <img className="header-searchLogo" src={search} alt="search logo"/>
                <input className="header-inputBar" type="text" placeholder="Search for Movies, Events, Play, Activities, Sports"/>
            </div>
            <div className="header-menuBar">
            <div className='cities-dropdown'>
                <select>
                    {
                        cities.map((item,index)=><option key={index}>{item.name}</option>)
                    }
                </select>
            </div>
            <div>
                <Button title="Sign in"></Button>
            </div>
                <img  src={menu} alt="menu"/>
            </div>
        </div>
        <div className='nav-bar'>
                    <Tabs navTabs={navTabs} style="border-none"/>
                    <Tabs navTabs={extraNavTabs} style="border-none"/>
        </div>
    </div>
  )
}
