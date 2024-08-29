import React from "react";
import Categories from "../components/homeComponents/Categories";
import PopularCourses from "../components/homeComponents/PopularCourses";
import Banner from "../components/common/Banner";

const Courses = ({ activeScreen }) => {
  return (
    <>
      <Banner activeScreen={activeScreen} />
      <div className="relative w-full flex justify-center items-center">
        <div className=" lg:w-8/12">
          <Categories />
          <PopularCourses />
        </div>
      </div>
    </>
  );
};

export default Courses;
