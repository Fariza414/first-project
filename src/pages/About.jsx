import React from "react";
import NavBar from "../components/NavBar";
import Information from "../components/Information";

const About = () => {
  return (
    <div className="flex felx-col space-y-28">
      <NavBar />
      <Information />
    </div>
  );
};

export default About;
