
import React, { Component } from "react";
import ReactCardCarousel from 'react-card-carousel';
import Card from "./cards"
import img1 from "../Assets/Coding.jpg"
import img2 from "../Assets/gaming.jpg"
import img3 from "../Assets/Painting.jpg"
import img4 from "../Assets/Sketching.jpg"
import './Events.css';

class Events extends Component {
  render(){
    return(
      <div className = "container-fluid d-flex justify-content-center">
        <div className = "row">
        <ReactCardCarousel autoplay={ true } autoplay_speed={1000000 }>
          <div className= "col-md-4">
            <Card imgsrc= {img1} cardTitle ="Coding"/>
          </div>

          <div className= "col-md-4">
            <Card imgsrc= {img2} cardTitle ="Gaming" />
          </div>

          <div className= "col-md-4">
            <Card imgsrc= {img3} cardTitle ="Painting"/>
          </div>

          <div className= "col-md-4">
            <Card imgsrc= {img4} cardTitle ="Sketching"/>
          </div>
          </ReactCardCarousel>
        </div>    
      </div>
  
  );
}
}

export default Events;

