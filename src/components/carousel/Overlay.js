import React from "react";

const Overlay = ({ tagLine }) => {
  return (
    <>
      <div className="overlay">
        <div className="lg:w-4/12 flex align-center justify-center">
          <div className="lg:p-5">
            <h5 className="text-white uppercase md:mb:-3 mb-5">
              Best Online Courses
            </h5>
            <h1 className="text-5xl font-bold text-white mb-md-4">{tagLine}</h1>
            <div className="pt-10">
              <a
                className="lg:w-3/12 h-10 flex items-center rounded-lg text-white  p-5 background-primary "
                href="#category"
                style={{ width: "130px" }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Overlay;
