import React from "react";

const CourseCard = ({
  key,
  image,
  title,
  price,
  rating,
  review,
  duration,
  students,
}) => {
  return (
    <div key={key} className="lg:w-4/12 md:w-6/12 p-4">
      <div className="rounded-lg overflow-hidden mb-2">
        <img className="img-fluid" src={image} alt="" />
        <div className="bg-blueGray-100 p-4">
          <div className="flex justify-between mb-3">
            <small className="m-0">
              <i className="fa fa-users text-primary mr-2"></i>
              {students} Students
            </small>
            <small className="m-0">
              <i className="fa fa-clock-o text-primary mr-2"></i>
              {duration}
            </small>
          </div>
          <a className="h5" href="">
            <h1 className="text-2xl font-semibold">{title}</h1>
          </a>
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between">
              <h6 className="m-0">
                <i className="fa fa-star text-primary mr-2"></i>
                {rating + " "}
                <small>({review})</small>
              </h6>
              <h5 className="m-0">{price}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
