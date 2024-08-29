import React from "react";

const ContactUsForm = () => {
  return (
    <div className="py-10 flex justify-center">
      <div className="py-5 lg:w-4/12 md:1/2">
        <div className="text-center mb-8">
          <h5 className="text-primary text-lg letter-space-3 font-medium uppercase mb-3">
            Contact
          </h5>
          <h1 className="text-4xl font-semibold">Contact For Any Query</h1>
        </div>
        <div className="flex justify-center rounded bg-blueGray-200 py-6 mt-2 ">
          <div className="w-full px-12">
            <div className="contact-form bg-secondary rounded p-5">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" novalidate="novalidate">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control rounded border-0 p-4"
                    id="name"
                    placeholder="Your Name"
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control rounded border-0 p-4"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control rounded border-0 p-4"
                    id="subject"
                    placeholder="Subject"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control rounded border-0 py-3 px-4"
                    rows="5"
                    id="message"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="text-center">
                  <button
                    className="btn bg-primary rounded text-white py-3 px-5"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
