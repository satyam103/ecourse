import React from "react";

const Banner = ({ activeScreen }) => {
  return (
    <>
      <div className="bg-registration banner">
        <div className="flex h-full justify-center items-center">
          <div className="flex flex-col w-6/12 justify-center items-start">
            <h3 className="display-4 text-5xl font-semibold mb-3 text-white uppercase">
              {activeScreen}
            </h3>
            <div className="flex text-white">
              <p className="m-0 uppercase">
                <a className="text-white" href="">
                  Home
                </a>
              </p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 uppercase">{activeScreen}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
