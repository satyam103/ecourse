import React from "react";
import emailjs from "emailjs-com";

const Registration = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3phpt8q",
        "template_s1yh01p",
        e.target,
        "wvKZExRoXcxhbHyb-"
      )
      .then(
        (result) => {
          alert("Email sent successfully!", result.text);
        },
        (error) => {
          alert("Error sending email:", error.text);
        }
      );
  }

  return (
    <div id="contact" className="bg-registration my-5 mb-4">
      <div className="relative w-full flex justify-center items-center">
        <div className="container py-16">
          <div className="flex align-center md:flex-col lg:flex-row">
            <div className="lg:w-6/12 md:w-full lg:p-8 md:p-4">
              <div className="py-12">
                <div className="mb-6">
                  <h5 className="text-primary text-lg mb-6 font-semibold letter-space-3 uppercase mb-3">
                    Need Any Courses
                  </h5>
                  <h1 className="text-white text-4xl font-bold my-16">
                    30% Off For New Students
                  </h1>
                </div>
                <p className="text-white">
                  Invidunt lorem justo sanctus clita. Erat lorem labore ea,
                  justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea
                  justo. Erat justo sed sed diam. Ea et erat ut sed diam sea
                  ipsum est dolor
                </p>
                <ul className="text-white mt-4">
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3"></i>Labore eos
                    amet dolor amet diam
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3"></i>Etsea et
                    sit dolor amet ipsum
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3"></i>Diam dolor
                    diam elitripsum vero.
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-6/12 md:w-full lg:p-8 md:p-4">
              <div className="lg:px-12">
                <div className="rounded-top-lg bg-white text-center p-4 py-6">
                  <h1 className="font-bold text-4xl">Sign Up Now</h1>
                </div>
                <div className="rounded-bottom-lg flex justify-center align-center bg-primary px-4 py-10">
                  {/* <form onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                    ></textarea>
                    <button type="submit">Send Email</button>
                  </form> */}

                  <form onSubmit={sendEmail} className="w-10/12">
                    <div className="form-group ">
                      <input
                        type="text"
                        name="name"
                        className="form-control rounded-lg my-2 border-0 p-4"
                        placeholder="Your name"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control rounded-lg my-2 border-0 p-4"
                        placeholder="Your email"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="message"
                        className="form-control rounded-lg my-2 border-0 p-4"
                        placeholder="Enter your message here ..."
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <select className="custom-select form-control rounded-lg my-2 border-0 ">
                        <option className="text-black" selected>
                          Select a course
                        </option>
                        <option value="1">Web Design</option>
                        <option value="2">Development</option>
                        <option value="3">Marketing</option>
                      </select>
                    </div>
                    <div>
                      <button
                        className="btn btn-dark text-white hover:btn-dark w-full h- mt-6 rounded-lg py-3"
                        type="submit"
                      >
                        Sign Up Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
