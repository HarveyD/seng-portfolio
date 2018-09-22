import * as React from "react";

import "./experience.css";
import ExperienceCard from "../../components/experience-card/experience-card";

const experienceList = [
  {
    company: {
      name: "RateSetter",
      title: "Software Engineer",
      description: ""
    },
    workDate: {
      from: "July 2018",
      to: "Present"
    },
    workLogo: "rs.jpg"
  },
  {
    company: {
      name: "Commonwealth Bank of Australia",
      title: "Software Engineer",
      description: "Did some stuff"
    },
    workDate: {
      from: "February 2018",
      to: "July 2018"
    },
    workLogo: "cba.png"
  },
  {
    company: {
      name: "Commonwealth Bank of Australia",
      title: "Software Engineer",
      description:
        "Created a hybrid mobile application using Cordova, Angular 2+ and .NET that greatly improved the experience branch managers have in finding suitable casual or part-time staff replacements."
    },
    workDate: {
      from: "February 2017",
      to: "January 2018"
    },
    workLogo: "cba.png"
  },
  {
    company: {
      name: "Department of Defence",
      title: "Junior Developer",
      description:
        "Part-time Backend Developer. Involved with consulting internal clients and writing SQL stored procedures and API's in .NET that met client's data requirements."
    },
    workDate: {
      from: "March 2016",
      to: "November 2016"
    },
    workLogo: "dod.gif"
  },
  {
    company: {
      name: "Australian National University",
      title: "Senior Resident",
      description:
        "Senior Resident (AKA Residential Advisor) at the residential college Bruce Hall. Responsible for providing pastoral care and support for over 300 students at the college. Helped organised and facilitate numerous small and large events at the college throughout the year."
    },
    workDate: {
      from: "January 2016",
      to: "November 2017"
    },
    workLogo: "anu.png"
  }
];

const Experience: React.StatelessComponent = () => {
  return (
    <div className="section experience secondary">
      <h2>Experience</h2>

      <div className="content-container experience-container">
        {experienceList.map((exp, i) => (
          <ExperienceCard key={i} cardDetails={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
