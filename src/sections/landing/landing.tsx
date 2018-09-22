import * as React from "react";
import "./landing.css";

const user = {
  firstName: "Harvey",
  lastName: "Delaney",
  title: "Software Engineer"
};

const renderHeading = () => {
  const headingList = ["About", "Experience", "Projects", "Skills", "Contact"];
  return headingList.map((heading, i) => (
    <a className="heading-link" key={i}>
      {heading}
    </a>
  ));
};

const Landing: React.StatelessComponent = () => {
  return (
    <div className="landing-container">
      <div className="landing-overlay" />

      <div className="container heading">{renderHeading()}</div>

      <div className="container content">
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <h2>{user.title}</h2>
      </div>

      <div className="container footer">
        <span className="find-out">Find out more about {user.firstName}</span>
        <i className="fa fa-chevron-down" />
      </div>
    </div>
  );
};

export default Landing;
