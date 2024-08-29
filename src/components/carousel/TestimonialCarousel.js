import React, { useState } from "react";
import Slider from "react-slick";
import { testimonials } from "../../assets/data/testimonial";

const TestimonialCarousel = () => {
  const [currIndex, setIndex] = useState(0);
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    adaptiveHeight: true,
    arrows: false,
    // dotsClass: "slick-dots1 custom-dots1",
    afterChange: (value) => {
      setIndex(value);
    },
  };
  return (
    <div className="carousel-container1">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={
              currIndex === index ? "active carousel-item1" : "carousel-item1"
            }
          >
            <div className="testimonial1 align-center justify-center flex flex-col">
              <i className="fa fa-3x fa-quote-left text-primary lg:mb-6 md:mb-4"></i>
              <h4 className="font-normal letter-space-1 text-xl lg:my-4 md:my-2">
                {testimonial.review}
              </h4>
              <div className="author1 my-4">
                <img className="lg:my-6 md:my-2" src={testimonial.image} alt="" />
              </div>
              <h5 className="text-lg font-semibold">{testimonial.name}</h5>
              <h5>{testimonial.profession}</h5>
            </div>
            {/* </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
