import React, { useState } from "react";

const Dropdown = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <>
      <button
        className="bg-blueGray-200 focus:outline-none w-full h-16 font-medium rounded font-semibold flex justify-between p-5
             px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        onClick={toggleDropdown}
      >
        <h5 className="text-primary text-2xl ">
          <i className="fa fa-book mr-2"></i>Subjects
        </h5>
        <i className="fa fa-angle-down text-primary font-bold"></i>
      </button>
      {dropdownVisible && (
        <nav
          className="z-10 absolute w-56  divide-y divide-gray-100 rounded-lg dark:bg-gray-700 lg:w-3/12 "
          id="navbar-vertical"
          style={{ paddingRight: "1.50rem" }}
        >
          <div className="flex flex-col bg-white ">
            <div className="p-2 border-b w-full flex  justify-between">
              <a href="#" className="" data-toggle="dropdown">
                Web Design <i className="fa fa-angle-down float-right mt-1"></i>
              </a>
              <div className=" hidden">
                <a href="" className="">
                  HTML
                </a>
                <a href="" className="">
                  CSS
                </a>
                <a href="" className="">
                  jQuery
                </a>
              </div>
            </div>
            <a href="" className="p-2 border-b w-full">
              Apps Design
            </a>
            <a href="" className="p-2 border-b w-full">
              Marketing
            </a>
            <a href="" className="p-2 border-b w-full">
              Research
            </a>
            <a href="" className="p-2 border-b w-full">
              SEO
            </a>
          </div>
        </nav>
      )}
    </>
  );
};

export default Dropdown;
