import * as React from "react";

import "./info-card.scss";

interface IProps {
  cardDetails: IInfoCard;
}

export interface IInfoCard {
  logo: string;
  headings: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  description: string;
  isLast?: boolean;
}

const InfoCard: React.StatelessComponent<IProps> = props => {
  const {
    cardDetails: { logo, headings, description, isLast }
  } = props;

  return (
    <div className={"info-card-container" + (isLast ? " last-card" : "")}>
      <div className="logo-container">
        <img src={`/static/images/logos/${logo}`} />
      </div>

      <div className="details-container">
        <h3>{headings.primary}</h3>
        <h4>{headings.secondary}</h4>
        <h5>{headings.tertiary}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
