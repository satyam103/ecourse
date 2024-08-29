import React from "react";
import { teachers } from "../../assets/data/teachers";
import TeachersCard from "../cards/TeachersCard";

const Team = () => {
  return (
    <div className="py-16">
      <div className="pt-5 pb-3">
        <div className="text-center mb-8">
          <h5 className="text-primary font-semibold letter-space-3 uppercase mb-3">
            Teachers
          </h5>
          <h1 className="text-4xl font-bold">Meet Our Teachers</h1>
        </div>
        <div className="flex  justify-between ">
          <div className="flex flex-wrap lg:flex-nowrap justify-between">
            {teachers.map((element, index) => {
              return (
                <TeachersCard
                  key={index}
                  image={element.image}
                  name={element.name}
                  role={element.role}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
