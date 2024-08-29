import React from "react";
import HomeCarousel from "../components/carousel/HomeCarousel";
import AboutUsCard from "../components/cards/AboutUsCard";
import Categories from "../components/homeComponents/Categories";
import PopularCourses from "../components/homeComponents/PopularCourses";
import Registration from "../components/homeComponents/Registration";
import Team from "../components/homeComponents/Team";
import Testimonials from "../components/homeComponents/Testimonials";
import Blog from "../components/homeComponents/Blog";
import Footer from "../components/Footer";
import BackToTop from "../components/common/BackToTop";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <div className="relative w-full flex justify-center items-center">
        <div className=" lg:w-8/12">
          <AboutUsCard />
          <Categories />
          <PopularCourses />
        </div>
      </div>
      <Registration />
      <div className="relative w-full flex justify-center items-center">
        <div className=" md:w-8/12">
          <Team />
          <Testimonials />
          <Blog />
        </div>
      </div>
    </>
  );
};

export default Home;
