import React, { useEffect, useState } from "react";
import About from "./About";
import Courses from "./Courses";
import Teachers from "./Teachers";
import Home from "./Home";
import Navbar from "../components/Navbar";
import Contact from "./Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/common/BackToTop";

const HomeScreen = () => {
  const [activeScreen, setActiveScreen] = useState("Home");
  const [child, setChild] = useState(<Home />);
  useEffect(() => {
    if (activeScreen === "Home") {
      setChild(<Home />);
    }
    if (activeScreen === "About") {
      setChild(<About activeScreen={activeScreen} />);
    }
    if (activeScreen === "Teachers") {
      setChild(<Teachers activeScreen={activeScreen} />);
    }
    if (activeScreen === "Courses") {
      setChild(<Courses activeScreen={activeScreen} />);
    }
    if (activeScreen === "Contact") {
      setChild(<Contact activeScreen={activeScreen} />);
    }
  }, [activeScreen]);
  return (
    <>
      <Navbar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      {child}
      <Footer />
      <BackToTop />
    </>
  );
};

export default HomeScreen;
