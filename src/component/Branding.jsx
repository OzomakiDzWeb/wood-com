import React from "react";
import Slider from "react-slick";
import { BrandImag } from "../data/Data";
const Branding = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="mt-8">
     <div>
          <h1 className="uppercase text-center font-bold text-2xl">TOP branding</h1>
     </div>
      <Slider {...setting}>
        {BrandImag.map((img) => (
          <div key={img.id}>
            <img src={img.img} alt="img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Branding;
