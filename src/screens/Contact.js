import React from "react";
import Banner from "../components/common/Banner";
import ContactUsForm from "../components/contactComponent/ContactUsForm";

const Contact = ({ activeScreen }) => {
  return (
    <>
      <Banner activeScreen={activeScreen} />
      <ContactUsForm />
    </>
  );
};

export default Contact;
