import React from 'react';
import '../index.css';
import '../App.css';

function Aboutus() {
  return (

    <div className="container-fluid" id="about">
      <h1>About The Theme</h1>
      <div className="row">
      <div className="col-xs-8 col-sm-7 col-md-7">Cinema is the theme of Cultura'20. In the end, your life will be like a movie in flashback. You just need to make sure it is worth watching. "Its Showtime" as the tagline of Cultura'20 stands, implies that the right moment, the right opportunity, and the right platform to showcase your talents have come. It is in the accumulated hard work, the efforts applied, and the practice involved that would pay off. The time to show what you have got in store within you has come. So get yourselves power-packed, energized, and get ready to take part in this exciting fest. Happening this 6th and 7th of March, 2020 right there at CMR Institute of Technology. Be there to compete and conquer.
      </div>
      <div className="col-xs-2 col-sm-3 col-md-3">
      <iframe className="youtubevid" src="https://www.youtube.com/embed/ghdjPAnWRP4?autoplay=1&mute=1&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      </div>
    </div>


  );
}

export default Aboutus;
