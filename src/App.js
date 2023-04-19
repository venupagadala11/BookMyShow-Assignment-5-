
import './App.scss';

import EventComponent from './common-components/Event-Component/EventComponent';
import Button from 'react-bootstrap/Button';
import Header from './common-components/Header';
import LiveEvents from './Components/Live-events/LiveEvents';
import Premiere from './Components/Premiere/Premiere';
// import data from './Data'
import reel from './images/New folder/home-page.avif';
import {data,searchedData,funEvents}  from './Data.js';
import eventsData  from './Data.js';
import TrendingSearches from './Components/Trending-Searches/TrendingSearches';

import HomePage from './Components/Home-page/HomePage';
import MovieSection from './Components/Movies/MovieSection';
import Footer from './Components/Footer/Footer';



function App() {

  // const click =   () =>
  // {
  //   console.log(eventsData,data,"hiii")
  // }

  return (
    <div className="app">
      <Header/>
      
      {/* <button onClick={click}>click</button> */}
      <HomePage/>
      <MovieSection/>
      <Footer/>
    </div>
  );
}

export default App;
