import React, { useState } from "react";
import Dropdown from "./dropdown/Dropdown";

const Navbar = ({ activeScreen, setActiveScreen }) => {
  const [collapseVisible, setCollapseVisible] = useState(false);
  const toggleCollapse = () => {
    setCollapseVisible(!collapseVisible);
  };
  const handleActiveScreen = (active) => {
    setActiveScreen(active);
  };
  return (
    <div className="lg:px-10">
      <div className="w-full lg:flex">
        <div className="lg:w-3/12 md:hidden sm:hidden lg:block">
          <Dropdown />
        </div>
        <div className="lg:w-9/12 w-full justify-center ">
          <nav
            className={`lg:flex lg:flex-row h-full lg:px-3 md:justify-between bg-bslack`}
          >
            <div className="md:flex md:justify-between h-full px-3">
              <a href="" className="lg:hidden h-16 flex items-center ">
                <h1 className="text-4xl font-bold ">
                  <span className="text-primary">E</span>
                  COURSES
                </h1>
              </a>
              <button
                type="button"
                className="lg:hidden focus:outline-none"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                onClick={toggleCollapse}
              >
                <span className="py-2 px-3 flex align-center justify-center border rounded-lg">
                  <i className="fa fa-align-justify text-xl"></i>
                </span>
              </button>
            </div>
            <div
              className={`lg:flex items-center lg:justify-between md:justify-center  h-full w-full  ${
                collapseVisible ? "md:flex" : "md:hidden"
              }`}
              id="navbarCollapse"
            >
              <div
                className={
                  collapseVisible
                    ? "md:flex md:w-8/12 justify-between md:mb-2 lg:mb-0 lg:ml-3 lg:pl-10 lg:w-6/12"
                    : " ml-3 pl-10 h-full w-6/12 items-center flex justify-between"
                }
              >
                <button
                  onClick={() => handleActiveScreen("Home")}
                  className={[
                    (activeScreen === "Home" ? "active " : "") +
                      "h-full focus:outline-none lg:flex items-center md:px-4 justify-center lg:p-4 text-lg",
                  ]}
                >
                  Home
                </button>
                <button
                  onClick={() => handleActiveScreen("About")}
                  className={[
                    (activeScreen === "About" ? "active " : "") +
                      "h-full focus:outline-none lg:flex items-center md:px-4 justify-center lg:p-4 text-lg",
                  ]}
                >
                  About
                </button>
                <button
                  onClick={() => handleActiveScreen("Courses")}
                  className={[
                    (activeScreen === "Courses" ? "active " : "") +
                      "h-full focus:outline-none lg:flex items-center md:px-4 justify-center lg:p-4 text-lg",
                  ]}
                >
                  Courses
                </button>
                <button
                  onClick={() => handleActiveScreen("Teachers")}
                  className={[
                    (activeScreen === "Teachers" ? "active " : "") +
                      "h-full focus:outline-none lg:flex items-center md:px-4 justify-center lg:p-4 text-lg",
                  ]}
                >
                  Teachers
                </button>
                <div className="hidden">
                  <a href="#" className="" data-toggle="dropdown">
                    Blog
                  </a>
                  <div className="">
                    <a href="blog.html" className="">
                      Blog List
                    </a>
                    <a href="single.html" className="">
                      Blog Detail
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleActiveScreen("Contact")}
                  className={[
                    (activeScreen === "Contact" ? "active " : "") +
                      "h-full focus:outline-none lg:flex items-center md:px-4 justify-center lg:p-4 text-lg",
                  ]}
                >
                  Contact
                </button>
              </div>
              {(activeScreen === "Home" || activeScreen === "About") && (
                <div className="lg:block md:hidden">
                  <a
                    className="h-10 flex items-center rounded-lg text-white  p-5 background-primary "
                    href="#contact"
                  >
                    Join Now
                  </a>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
