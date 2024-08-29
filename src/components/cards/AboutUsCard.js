import React from "react";

const AboutUsCard = () => {
  return (
    <div id="about" className="py-20 pb-10 px-2">
      <div className="py-12 pb-8">
        <div className="flex lg:flex-row md:flex-col items-center justify-center w-full">
          <div className="lg:w-4/12 md:w-8/12 rounded md:mb-4 flex lg:justify-center">
            <img
              className="rounded-lg"
              src={require("../../assets/img/about.jpg")}
              alt="about"
              // style={{ height: "450px", width: "450px" }}
            />
          </div>
          <div className="lg:w-8/12 md:w-8/12 lg:px-10 flex flex-col justify-center md:mt-4">
            <div className="">
              <p className="text-primary uppercase letter-space-3 font-medium">
                About Us
              </p>
              <h1 className="text-3xl font-semibold py-6">
                Innovative Way To Learn
              </h1>
            </div>
            <p>
              Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita,
              ipsum dolores amet voluptua duo dolores et sit ipsum rebum,
              sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus
              gubergren sit rebum clita amet, sea est sea vero sed et.
              Sadipscing labore tempor at sit dolor clita consetetur diam. Diam
              ut diam tempor no et, lorem dolore invidunt no nonumy stet ea
              labore, dolor justo et sit gubergren diam sed sed no ipsum. Sit
              tempor ut nonumy elitr dolores justo aliquyam ipsum stet
            </p>
            <div className="pt-10">
              <a
                className="h-10 lg:w-3/12 flex items-center rounded-lg text-white  p-5 background-primary "
                href=""
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
