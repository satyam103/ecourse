import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-dark text-white md:px-10 py-16 mt-24">
        <div className="lg:flex pt-12 md:px-10">
          <div className="lg:w-8/12 md:w-full md:mb-4 lg:mb-0">
            <div className="flex">
              <div className="md:w-6/12 mb-5 ">
                <h5 className="text-primary text-xl letter-space-3 uppercase mb-6">
                  Get In Touch
                </h5>
                <p className="my-4">
                  <i className="fa fa-map-marker mr-2 my-"></i>123 Street, New
                  York, USA
                </p>
                <p className="my-4">
                  <i className="fa fa-phone mr-2"></i>+012 345 67890
                </p>
                <p className="my-4">
                  <i className="fa fa-envelope mr-2"></i>info@example.com
                </p>
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
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram icon"></i>
                    </a>
                  </li>
                </ul>
                {/* <div className="flex justify-start mt-6">
                  <li>
                    <a
                      className="btn btn-social hover:btn-social border p-2 rounded-lg mr-2"
                      href="#"
                    >
                      <i className="fa fa-twitter text-xl"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-social hover:btn-social border p-2 rounded-lg mr-2 "
                      href="#"
                    >
                      <i className="fa fa-facebook text-xl"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-social hover:btn-social border p-2 rounded-lg mr-2"
                      href="#"
                    >
                      <i className="fa fa-linkedin text-xl"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-social hover:btn-social border p-2 rounded-lg mr-2"
                      href="#"
                    >
                      <i className="fa fa-instagram text-xl"></i>
                    </a>
                  </li>
                </div> */}
              </div>
              <div className="md:w-6/12 mb-5">
                <h5 className="text-primary text-xl letter-space-3 uppercase mb-6">
                  Our Courses
                </h5>
                <div className="flex flex-col justify-start">
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Web Design
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Apps Design
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Marketing
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Research
                  </a>
                  <a className="text-white" href="#">
                    <i className="fa fa-angle-right mr-2"></i>SEO
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-4/12 md:w-full mb-5">
            <h5 className="text-primary text-xl letter-space-3 uppercase mb-6">
              Newsletter
            </h5>
            <p>
              Rebum labore lorem dolores kasd est, et ipsum amet et at kasd,
              ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor
              duo eirmod sea justo no lorem est diam
            </p>
            <div className="w-100 my-6 py-4">
              <div className="form-group flex rounded-lg items-center ">
                <input
                  type="text"
                  className="form-control rounded-left-lg p-8"
                  placeholder="Your Email Address"
                />
                {/* whitespace-nowrap px-6 py-5 */}
                {/* <div className="flex"> */}
                <button className="btn flex focus:outline-none items-center text-lg justify-center rounded-right-lg whitespace-nowrap bg-primary h-full p-8">
                  Sign Up
                </button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark text-white border-t border-1 py-4 sm:px-3 md:px-10">
        <div className="flex items-center justify-between md:px-10">
          <div className="text-center md:text-left">
            <p className="text-white flex">
              &copy;{" "}
              <a href="#" className="text-primary md:hidden lg:block">
                Domain Name.
              </a>
              <p className="px-2">All Rights Reserved.</p>
              <p className="md:hidden lg:block pr-2">
                Designed by{" "}
                <a href="https://htmlcodex.com" className="text-primary">
                  HTML Codex
                </a>
              </p>
            </p>
          </div>
          <div className="text-center md:ml-10 lg:ml-0">
            <ul className="flex ">
              <li className="lg:mr-4 px-4">
                <a className=" text-white py-0" href="#">
                  Privacy
                </a>
              </li>
              <li className="lg:mr-4 px-4">
                <a className=" text-white py-0" href="#">
                  Terms
                </a>
              </li>
              <li className="lg:mr-4 px-4">
                <a className=" text-white py-0" href="#">
                  FAQs
                </a>
              </li>
              <li className="lg:mr-4 px-4">
                <a className=" text-white py-0" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
