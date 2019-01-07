import * as React from "react";

import "./education.scss";
import InfoCard, { IInfoCard } from "../../shared/info-card/info-card";

interface IProps {
  educationList: IInfoCard[];
}

const Education: React.StatelessComponent<IProps> = ({educationList}) => {
  return (
    <section className="section section-primary">
      <h2>Education</h2>

      <div className="content-container education-container">
        {educationList.map((exp, i) => (
          <InfoCard key={i} cardDetails={exp} />
        ))}
      </div>
    </section>
  );
};

export default Education;
