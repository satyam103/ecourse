import React from "react";
import { course } from "../../assets/data/course";
import CourseCard from "../cards/CourseCard";

const PopularCourses = () => {
  return (
    <div className="py-20">
      <div className="py-4">
        <div className="text-center mb-5">
          <h5 className="text-primary uppercase font-medium letter-space-3 mb-3">
            Courses
          </h5>
          <h1 className="text-4xl font-bold">Our Popular Courses</h1>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center md:w-8/12 lg:w-auto">
            {course.map((element, index) => {
              return (
                <CourseCard
                  key={index}
                  image={element.image}
                  title={element.title}
                  students={element.students}
                  rating={element.rating}
                  review={element.review}
                  duration={element.duration}
                  price={element.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
