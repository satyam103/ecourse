import React from "react";
import TestimonialCarousel from "../carousel/TestimonialCarousel";

const Testimonials = () => {
  return (
    <div className="py-5">
      <div className="py-5">
        <div className="text-center mb-8">
          <h5 className="text-primary font-semibold letter-space-3 uppercase mb-5">
            Testimonial
          </h5>
          <h1 className="text-4xl font-bold">What Say Our Students</h1>
        </div>
        {/* <div className="flex justify-center"> */}
          <TestimonialCarousel />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
