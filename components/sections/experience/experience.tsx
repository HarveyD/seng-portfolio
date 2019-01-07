import * as React from "react";

import "./experience.scss";
import InfoCard, { IInfoCard } from "../../shared/info-card/info-card";

interface IProps {
  experienceList: IInfoCard[];
}

const Experience: React.StatelessComponent<IProps> = ({experienceList}) => {
  return (
    <section className="section section-secondary">
      <h2>Experience</h2>

      <div className="content-container experience-container">
        {experienceList.map((exp, i) => (
          <InfoCard key={i} cardDetails={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
