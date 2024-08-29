import React from "react";

const CategoryCard = ({ image, tagline, key }) => {
  return (
    <div key={key} className="lg:w-3/12  md:w-6/12 p-3">
      <div className="cat-item relative overflow-hidden rounded-lg">
        <img
          id="card-img"
          className="img-fluid rounded-lg"
          src={image}
          alt={image}
        />
        <div className="overlay text-white" id="card-overlay">
          <h4 className="text-white font-medium">{tagline}</h4>
          <span>100 Courses</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
