import React from "react";
import Slider from "react-slick";
import { slidHomeImg } from "../data/Data.js";
const SlideHome = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      {slidHomeImg.map((img) => (
        <div className="h-[calc(100vh-120px)] w-screen overflow-y-hidden" key={img.id}>
          <img src={img.img} alt="" />
        </div>
      ))}
    </Slider>
  );
};

export default SlideHome;
