import React from "react";
import Team from "../components/homeComponents/Team";
import Banner from "../components/common/Banner";

const Teachers = ({ activeScreen }) => {
  return (
    <>
      <Banner activeScreen={activeScreen} />
      <div className="relative w-full flex justify-center items-center">
        <div className=" md:w-8/12">
          <Team />
        </div>
      </div>
    </>
  );
};

export default Teachers;
