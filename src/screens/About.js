import React, { act } from "react";
import AboutUsCard from "../components/cards/AboutUsCard";
import Registration from "../components/homeComponents/Registration";
import Testimonials from "../components/homeComponents/Testimonials";
import Banner from "../components/common/Banner";

const About = ({ activeScreen }) => {
  return (
    <>
      <Banner activeScreen={activeScreen} />
      <div className="relative w-full flex justify-center items-center">
        <div className=" lg:w-8/12">
          <AboutUsCard />
        </div>
      </div>
      <Registration />
      <div className="relative w-full flex justify-center items-center">
        <div className=" md:w-8/12">
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default About;
