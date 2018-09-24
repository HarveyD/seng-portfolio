import * as React from "react";

import "./social.css";

interface IProps {
  social: ISocialIcon;
}

export interface ISocialIcon {
  id: string;
  name: string;
  icon: string;
  url: string;
}

const SocialIcon: React.StatelessComponent<IProps> = props => {
  const {
    social: { id, name, icon }
  } = props;

  return (
    <div className={`social-container ${id}`}>
      <div className="icon-container">
        <i className={`icon fa ${icon}`} />
      </div>
      <span className="name">{name}</span>
    </div>
  );
};

export default SocialIcon;
