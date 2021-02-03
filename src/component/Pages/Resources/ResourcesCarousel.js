import React, { Component } from "react";
import Slider from "react-slick";
import { Paper } from "@material-ui/core";
import Banner1 from "./ResourcesCarousel/fence-mount-pids-1.jpg"
import Banner2 from "./ResourcesCarousel/bids-1.jpg"
import Banner3 from "./ResourcesCarousel/dass-1.jpg"
import Banner4 from "./ResourcesCarousel/ipams-1.jpg"
import Banner5 from "./ResourcesCarousel/pat-1.jpg"
import Banner6 from "./ResourcesCarousel/Perimeter-Protection-System-1.jpg"
import Banner7 from "./ResourcesCarousel/pipeline-protection-system.jpg"
import Banner8 from "./ResourcesCarousel/simply-smarter-eng-1-1.jpg"
import Banner9 from "./ResourcesCarousel/smart-airfield-solution-1.jpg"
import Banner10 from "./ResourcesCarousel/smart-prison-system.jpg"
import Banner11 from "./ResourcesCarousel/wall-pids-1.jpg"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };
    return (
      <>
        <Slider {...settings}>
          <div>
            <Paper>
              <img
                width='100%'
                height='400px'
                src={Banner1}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                height='400px'
                src={Banner2}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                height='400px'
                src={Banner3}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                height='400px'
                src={Banner4}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                height='400px'
                src={Banner5}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                height='400px'
                src={Banner6}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                height='400px'
                src={Banner7}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                height='400px'
                src={Banner8}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                height='400px'
                src={Banner9}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                height='400px'
                src={Banner10}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                height='400px'
                src={Banner11}
                alt=''
              />
            </Paper>
          </div>
        </Slider>
      </>
    );
  }
}
