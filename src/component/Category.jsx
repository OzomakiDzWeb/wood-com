import React from "react";
import Slider from "react-slick";
import { categore } from "../data/Data";

const Category = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      
    ],
  };
  return (
    <div className="mt-8">
      <div>
        <h1 className="uppercase text-center font-bold text-2xl mb-10">
          TOP category
        </h1>
      </div>
      <Slider {...setting}>
        {categore.map((img) => (
          <div className="" key={img.id}>
            <img className="text-center m-auto" src={img.img} alt="img" />
            <h1 className="text-xl font-semibold text-center  mt-3 ">{img.name}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Category;
