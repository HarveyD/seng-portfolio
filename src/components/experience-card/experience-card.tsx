import * as React from "react";

import "./experience-card.css";

interface IProps {
  cardDetails: IExperienceCard;
}

interface IExperienceCard {
  workDate: {
    from: string;
    to: string;
  };
  workLogo: string;
  company: {
    name: string;
    title: string;
    description: string;
  };
}

const ExperienceCard: React.StatelessComponent<IProps> = props => {
  const {
    cardDetails: { workLogo, company, workDate }
  } = props;

  return (
    <div className="experience-card-container">
      <div className="company-logo-container">
        <img src={require(`../../assets/images/logos/${workLogo}`)} />
      </div>

      <div className="company-details-container">
        <h3>{company.name}</h3>
        <h4>{company.title}</h4>
        <h5>
          {workDate.from} - {workDate.to}
        </h5>
        <p>{company.description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
