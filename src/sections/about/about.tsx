import * as React from "react";

import "./about.css";
import Portait from "src/assets/images/portrait.jpg";

const renderAboutText = () => (
  <div className="about-text">
    <p>Hey there! My name is Harvey Delaney.</p>
    <p>
      I'm a software engineer currently working at the RateSetter. I am a
      fullstack software engineer that prides myself on writing clean, readable,
      testable, extensible and scalable code.
    </p>
    <p>
      Outside of work, I am always looking to learn new frameworks and languages
      by watching Pluralsight videos and putting this knowledge into practice by
      undertaking my personal projects. I have and currently read a number of
      well-known programming books including Clean Code and The Pragmatic
      Programmer to learn best practice programming.
    </p>
  </div>
);

const About: React.StatelessComponent = () => {
  return (
    <div className="section section-primary about">
      <h2>About Harvey</h2>
      <div className="content-container about-container">
        <img className="portrait" src={Portait} />
        {renderAboutText()}
      </div>
    </div>
  );
};

export default About;
