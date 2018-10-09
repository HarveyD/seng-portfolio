import * as React from "react";

import "./experience.css";
import InfoCard, { IInfoCard } from "../../components/info-card/info-card";

interface IProps {
  experienceList: IInfoCard[];
}

const Experience: React.StatelessComponent<IProps> = ({experienceList}) => {
  return (
    <div className="section section-secondary">
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
