import React from "react";
import { categories } from "../../assets/data/categories";
import CategoryCard from "../cards/CategoryCard";

const Categories = () => {
  return (
    <div id="category" className="py-5">
      <div className=" pt-5 pb-3">
        <div className="text-center mb-5">
          <h5 className="text-primary font-medium letter-space-3 uppercase mb-3">
            Subjects
          </h5>
          <h1 className="text-4xl font-semibold">Explore Top Subjects</h1>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center md:w-8/12 lg:w-auto">
            {categories.map((element, index) => {
              return (
                <CategoryCard
                  key={index}
                  tagline={element.tagline}
                  image={element.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
