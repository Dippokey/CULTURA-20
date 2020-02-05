import React from 'react';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Caro from './components/Caro';
import Slider from './components/eventcaro';
import img1 from "./Assets/Photography.jpg"
import img2 from "./Assets/Dance.jpg"
import img3 from "./Assets/Fashion.jpg"
import img4 from "./Assets/Circuits.jpg"
import img5 from "./Assets/Coding.jpg"
import img6 from "./Assets/gaming.jpg"
import img7 from "./Assets/kannada.png"
import img8 from "./Assets/Literature.jpg"
import img9 from "./Assets/Music.jpg"
import img10 from "./Assets/Poster.jpg"
import img11 from "./Assets/Sketching.jpg"
import img12 from "./Assets/Theatre.jpg"
import black from "./Assets/black.jpg"
import img13 from "./Assets/informal.jpg"
import img14 from "./Assets/Civil.jpg"




//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const slideData = [
  {
    index: 0,
    headline: 'Photography',
    button: 'Events',
    src: img1,
    // src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
    src_back: black,
    hrefObj :[{
      refer :"https://www.google.com/",
      headl:"DSLR Photography",
  }],
  },
  {
    index: 1,
    headline: 'Dance',
    button: 'Events',
    src: img2,
    hrefObj :[
      {
        refer :"http://ghjjkw",
        headl:"Kick n Crew",
      },
      {
        refer :"http://ghjjkw",
        headl:"Two for Tango",
      },
      {
        refer :"http://ghjjkw",
        headl:"Switch Foot",
      },
      {
        refer :"http://ghjjkw",
        headl:"1 vs 1",
      },
      {
        refer :"http://ghjjkw",
        headl:"Kinkini",
      },
],
  },
  {
    index: 2,
    headline: "Coding",
    button: 'Events',
    src: img5,
    hrefObj :[{
      refer :"http://ghjjkw",
      headl:"Code Mantra",
  },
  {
    refer :"http://ghjjkw",
    headl:"Code-E-War",
  },
  {
    refer :"http://ghjjkw",
    headl:"Coding Patterns",
},
{
  refer :"http://ghjjkw",
  headl:"Cryptography",   //this one comes under tce
}],
  },
  {
    index: 3,
    headline: 'Circuits',
    button: 'Events',
    src: img4,
    hrefObj :[{
      refer :"http://ghjjkw",
      headl:"Robo Race",
    },
    {
      refer :"http://ghjjkw",
      headl:"Circuit Hunt",  
    },
    {
      refer :"http://ghjjkw",
      headl:"Operation Silicon",
    },{
      refer :"http://ghjjkw",
      headl:"The pursuit of technocrat",
    }
    
  ],
  }
  ,{
    index: 4,
    headline: 'Fashion',
    button: 'Events',
    src: img3,
    hrefObj :[{
      refer :"http://ghjjkw",
      headl:"Fashion show",
  }],
  },
  {
    index: 5,
    headline: 'Music',
    button: 'Events',
    src: img9,
    hrefObj :[{
      refer :"http://ghjjkw",
      headl:"Solo Singing",
  },{
    refer :"http://ghjjkw",
    headl:"Instrumental",
},{
  refer :"http://ghjjkw",
  headl:"Battle of Bands",
},{
  refer :"http://ghjjkw",
  headl:"Rap Battle",
},{
  refer :"http://ghjjkw",
  headl:"Group Singing",
}],
  },
  {
    index: 6,
    headline: 'Gaming',
    button: 'Events',
    src: img6,
    hrefObj :[{
      refer :"http://ghjjkw",
      headl:"Call of Duty",
  },
  {
    refer :"http://ghjjkw",
    headl:"Counter Strike",
},{
  refer :"http://ghjjkw",
  headl:"NFS",
},
{
  refer :"http://ghjjkw",
  headl:"FIFA",
},
{
  refer :"http://ghjjkw",
  headl:"PUBG",
}],
  },
  {
    index: 7,
    headline: 'Muses',
    button: 'Events',
    src: img10,
    hrefObj :[{
      refer :"http://ghjjkw",
      headl:"Poster Making",
  }],
  },
  {
    index: 8,
    headline: 'Theatre',
    button: 'Events',
    src: img12,
    hrefObj :[{
      refer :"http://ghjjkw",
      headl:"Improv",
  },{
    refer :"http://ghjjkw",
    headl:"Streetplay",
},{
  refer :"http://ghjjkw",
  headl:"Mime",
},{
  refer :"http://ghjjkw",
  headl:"Mad Ads",
}],
  },
  {
    index: 9,
    headline: 'Literary',
    button: 'Events',
    src: img8,
    hrefObj :[{
      refer :"http://ghjjkw",
      headl:"Quiz",
  },
  {
    refer :"http://ghjjkw",
    headl:"Jam",
},{
  refer :"http://ghjjkw",
  headl:"Debate",
}],
  },
  {
    index: 10,
    headline: 'Art',
    button: 'Events',
    src: img11,
    hrefObj :[{
      refer :"http://ghjjkw",
      headl:"Book Cover",
  },
  {
    refer :"http://ghjjkw",
    headl:"Cartooning",
  },{
    refer :"http://ghjjkw",
    headl:"Charcoal art",
  }],
  },
  
  {
    index: 11,
    headline: 'Informal',
    button: 'Events',
    src: img13,
    hrefObj :[{
      refer :"http://ghjjkw",
      headl:"Mr.Fit",
  },{
    refer :"http://ghjjkw",
    headl:"Food Hunt",
  },{
    refer :"http://ghjjkw",
    headl:"Hogothon",
  },{
    refer :"http://ghjjkw",
    headl:"Stand-up Comedy",
  },{
    refer :"http://ghjjkw",
    headl:"DJ Wars",
  }],
  },


  {
    index: 12,
    headline: 'Civil',
    button: 'Events',
    src: img14,
    hrefObj :[{
      refer :"http://ghjjkw",
      headl:"C-Quiz",
  },{
    refer :"http://ghjjkw",
    headl:"Eco Wars",
  }],
  },
  {
    index: 13,
    headline: 'Kannada',
    button: 'Events',
    src: img7,
    hrefObj :[{
      refer :"http://ghjjkw",
      headl:"KGF",
  },{
    refer :"http://ghjjkw",
    headl:"Hemmeya Kannadiga",
  },{
    refer :"http://ghjjkw",
    headl:"Bhaavasangama",
  }],
  },
  
]
function App() {
  return (<div className="App" >

    <Navigation > </Navigation>
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