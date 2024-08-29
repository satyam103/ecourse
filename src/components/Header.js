import React from "react";

const Header = () => {
  return (
    <div className="w-full hidden lg:block">
      <div className="flex  items-center shadow px-12 p-5">
        <div className="lg:w-3/12">
          <a href="" className="">
            <h1 className="text-4xl font-semibold ">
              <span className="text-primary">E</span>
              COURSES
            </h1>
          </a>
        </div>
        <div className="lg:w-3/12 flex justify-end ">
          <div className=" flex items-center">
            <i className="fa fa-2x fa-map-marker text-primary mr-3"></i>
            <div className="pl-3">
              <h6 className="font-semibold">Our Office</h6>
              <small>123 Street, New York, USA</small>
            </div>
          </div>
        </div>
        <div className="lg:w-3/12 flex justify-end ">
          <div className="flex items-center">
            <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
            <div className="pl-3">
              <h6 className="font-semibold">Email Us</h6>
              <small>info@example.com</small>
            </div>
          </div>
        </div>
        <div className="lg:w-3/12 flex justify-end">
          <div className="flex items-center ">
            <i className="fa fa-2x fa-phone text-primary mr-3"></i>
            <div className="pl-3">
              <h6 className="font-semibold">Call Us</h6>
              <small>+012 345 6789</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
