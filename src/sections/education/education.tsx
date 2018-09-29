import * as React from "react";

import "./education.css";
import InfoCard, { IInfoCard } from "../../components/info-card/info-card";

const educationList: IInfoCard[] = [
  {
    logo: "anu.png",
    headings: {
      primary: "Australian National University",
      secondary: "Bachelor of Software Engineering (Honours)",
      tertiary: "2013 - 2016"
    },
    description:
      "Undertook a four year Software Engineering degree accredited by Engineers Australia."
  },
  {
    logo: "dara.png",
    headings: {
      primary: "Daramalan",
      secondary: "Secondary Education",
      tertiary: "2007 - 2012"
    },
    description: "Studied here for both highschool and college.",
    isLast: true
  }
];

const Education: React.StatelessComponent = () => {
  return (
    <div className="section section-primary">
      <h2>Education</h2>

      <div className="content-container education-container">
        {educationList.map((exp, i) => (
          <InfoCard key={i} cardDetails={exp} />
        ))}
      </div>
    </div>
  );
};

export default Education;
