import React from 'react';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';

import Home from './components/Home';
import Caro from './components/Caro';
import Slider from './components/eventcaro';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const slideData = [
  {
    index: 0,
    headline: 'New Fashion Apparel',
    button: 'Shop now',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
  },
  {
    index: 1,
    headline: 'In The Wilderness',
    button: 'Book travel',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
  },
  {
    index: 2,
    headline: 'For Your Current Mood',
    button: 'Listen',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
  },
  {
    index: 3,
    headline: 'Focus On The Writing',
    button: 'Get Focused',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
  }
]
function App() {
  return (<div className="App" >


    <Home > </Home>
    <Slider heading="Example Slider" slides={slideData} />
    <Caro></Caro>
    <Aboutus > </Aboutus>
    <Slider heading="Example Slider" slides={slideData} />
    <Contact > </Contact>

  </div>

  );
}

export default App;
