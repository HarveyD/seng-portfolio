import * as React from "react";

import "./about.css";
import Portait from "src/assets/images/profile-picture.jpg";

const renderAboutText = (aboutTextList: string[]) => (
  <div className="about-text">
    {aboutTextList.map((textSection, i) => (
      <p key={i}>{textSection}</p>
    ))}
  </div>
);

interface IProps {
  aboutTextList: string[];
}

const About: React.StatelessComponent<IProps> = ({aboutTextList}) => {
  return (
    <section className="section section-primary section-about">
      <h2>About Harvey</h2>
      <div className="content-container about-container">
        <img className="portrait" src={Portait} />
        {renderAboutText(aboutTextList)}
      </div>
    </section>
  );
};

export default About;
