import React from "react";
import { products } from "../data/Data";
import Slider from "react-slick";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const NewArrival = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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
    <div className="mt-10">
      <h1 className="text-center font-bold text-2xl">New Arrival</h1>
      <Slider {...settings}>
        {products.map((product) => (
          <div className="" key={product.id}>
            <div className=" text-center my-2">
              <img className="mx-auto" src={product.img} alt={product.name} />
              <div className="flex justify-center gap-x-4">
                <FaHeart
                  className="cursor-pointer hover:text-therd transition-all duration-300"
                  size={30}
                />
                <FaShoppingCart
                  className="cursor-pointer hover:text-therd transition-all duration-300"
                  size={30}
                />
                <FaEye
                  size={30}
                  className="cursor-pointer hover:text-therd transition-all duration-300"
                />
              </div>
            </div>
            <p className="text-center text-xl font-semibold">{product.name}</p>
            <p className="text-center font-semibold">{product.price}$</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrival;
