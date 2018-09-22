import * as React from "react";

import "./experience.css";
import InfoCard, { IInfoCard } from "../../components/info-card/info-card";

const experienceList: IInfoCard[] = [
  {
    logo: "rs.jpg",
    headings: {
      primary: "RateSetter",
      secondary: "Software Engineer",
      tertiary: "July 2018 - Present"
    },
    description: ""
  },
  {
    logo: "cba.png",
    headings: {
      primary: "Commonwealth Bank of Australia",
      secondary: "Software Engineer",
      tertiary: "February 2018 - July 2018"
    },
    description: "Did some stuff"
  },
  {
    logo: "cba.png",
    headings: {
      primary: "Commonwealth Bank of Australia",
      secondary: "Software Engineer",
      tertiary:"February 2017 - January 2018"
    },
    description: "Created a hybrid mobile application using Cordova, Angular 2+ and .NET that greatly improved the experience branch managers have in finding suitable casual or part-time staff replacements."
  },
  {
    headings: {
      primary: "Department of Defence",
      secondary: "Junior Developer",
      tertiary: "March 2016 - November 2016"
    },
    description: "Part-time Backend Developer. Involved with consulting internal clients and writing SQL stored procedures and API's in .NET that met client's data requirements.",
    logo: "dod.gif"
  },
  {
    logo: "anu.png",
    headings: {
      primary: "Australian National University",
      secondary: "Senior Resident",
      tertiary: "January 2016 - November 2017"
    },
    description: "Senior Resident (AKA Residential Advisor) at the residential college Bruce Hall. Responsible for providing pastoral care and support for over 300 students at the college. Helped organised and facilitate numerous small and large events at the college throughout the year.",
    isLast: true
  }
];

const Experience: React.StatelessComponent = () => {
  return (
    <div className="section secondary">
      <h2>Experience</h2>

      <div className="content-container experience-container">
        {experienceList.map((exp, i) => (
          <InfoCard key={i} cardDetails={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
