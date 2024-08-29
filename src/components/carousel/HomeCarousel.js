import React, { useState } from "react";
import Slider from "react-slick";
import "../../assets/styles/Carousel.css";
import { carousels } from "../../assets/data/carousel";
import Overlay from "./Overlay";
import CarouselDots from "./CarouselDots";

const HomeCarousel = () => {
  const [currIndex, setIndex] = useState(0);
  const settings = {
    className: "center h-full",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    adaptiveHeight: true,
    arrows: false,
    // dots: true,
    // dotsClass: "slick-dots custom-dots",
    appendDots: () => <CarouselDots />,
    afterChange: (value) => {
      setIndex(value);
    },
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carousels.map((carousel, index) => (
          <div
            key={index}
            className={
              currIndex === index
                ? "active carousel-item relative"
                : "relative carousel-item "
            }
          >
            <div className="">
              <img src={carousel.image} className="w-full" alt="" />
            </div>
            <Overlay tagLine={carousel.tagLine} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
