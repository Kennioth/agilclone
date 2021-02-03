import React, { Component } from "react";
import Slider from "react-slick";
import { Paper } from "@material-ui/core";
import Banner1 from "./HomepageBanner/fence-1536x418.jpg"
import Banner2 from "./HomepageBanner/BIDS_Banner-Image-1536x418.jpg"
import Banner3 from './HomepageBanner/Distributed-Acousting-Sensing-System_Banner-Image-1536x418.jpg'
import Banner4 from './HomepageBanner/iPAMS_Banner-Image-1536x418.jpg'

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
      autoplaySpeed: 3000,
    };
    return (
      <>
        <Slider {...settings}>
          <div>
            <Paper>
              <img
                width='100%'
                height='100%'
                src= {Banner1}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                height='100%'
                src= {Banner2}
                alt=''
                loading="lazy"
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                height='100%'
                src= {Banner3}
                alt=''
                loading="lazy"
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                height='100%'
                src= {Banner4}
                alt=''
                loading="lazy"
              />
            </Paper>
          </div>
        </Slider>
      </>
    );
  }
}
