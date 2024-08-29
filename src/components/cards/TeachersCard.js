import React from "react";

const TeachersCard = ({ key, image, name, role }) => {
  return (
    <div key={key} className="md:w-6/12 lg:w-3/12 text-center mb-4 px-4">
      <div className="team-item tile rounded-lg bg-blueGray-100 overflow-hidden mb-2">
        <div className="team-img tile-card1 position-relative">
          <img className="img-fluid" src={image} alt="" />
          <div className="team-social absolute z-1 details h-full flex items-center justify-center w-full">
            <span className="flex justify-between items-center ">
              <ul className="social-icon">
                <li>
                  <a href="#">
                    <i class="fa fa-facebook-f icon"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter icon"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin icon"></i>
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
        <div className="bg-secondary p-4">
          <h5>{name}</h5>
          <p className="m-0">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeachersCard;
