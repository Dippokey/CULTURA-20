import React from 'react';
import './Events.css';
import Card from "./cards"
import img1 from "../Assets/Coding.jpg"
import img2 from "../Assets/gaming.jpg"
import img3 from "../Assets/Painting.jpg"
import img4 from "../Assets/Sketching.jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

class Events extends React.Component {
  render() {

    const responsive = {
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 4,
        partialVisibilityGutter: 30
      },
      mobile: {
        breakpoint: {
          max: 560,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      tablet1: {
        breakpoint: {
          max: 864,
          min: 560
        },
        items: 2,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 864
        },
        items: 3,
        partialVisibilityGutter: 30
      }
    }
  return(
          <Carousel
          additionalTransfrom={1}
          arrows = {true}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl={true}
          minimumTouchDrag={80}
          renderButtonGroupOutside={true}
          renderDotsOutside={true}
          responsive={responsive}
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          
        >
      
            
          <div className= "col-md-4">
            <Card imgsrc= {img1} cardTitle ="Coding" />
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
            
        </Carousel>
    );
  }
}

export default Events;
