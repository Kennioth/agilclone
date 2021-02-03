import React, { Component } from "react";
import Slider from "react-slick";
import { Paper } from "@material-ui/core";
import Banner1 from "./NewsBanner/event-1.jpg"
import Banner2 from "./NewsBanner/event-2.jpg"
import Banner3 from "./NewsBanner/event-3.jpg"
import Banner4 from "./NewsBanner/event-4.jpg"
import Banner5 from "./NewsBanner/event-5.jpg"
import Banner6 from "./NewsBanner/event-6.jpg"
import Banner7 from "./NewsBanner/event-7.jpg"
import Banner8 from "./NewsBanner/event-8.jpg"
import Banner9 from "./NewsBanner/event-9.jpg"
import Banner10 from "./NewsBanner/event-10.jpg"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <>
        <Slider {...settings}>
          <div>
            <Paper>
              <img
                width='100%'
                src={Banner1}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                src={Banner2}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                src={Banner3}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                src={Banner4}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                src={Banner5}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                src={Banner6}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                src={Banner7}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                src={Banner8}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                src={Banner9}
                alt=''
              />
            </Paper>
          </div>
          <div>
            <Paper>
              <img
                width='100%'
                src={Banner10}
                alt=''
              />
            </Paper>
          </div>
        </Slider>
      </>
    );
  }
}
