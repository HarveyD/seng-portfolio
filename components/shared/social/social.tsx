import * as React from "react";

import "./social.scss";

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
    social: { id, name, icon, url }
  } = props;

  return (
    <div className={`social-item-container ${id}`} onClick={() => window.open(url)}>
      <div className="icon-container">
        <i className={`icon fab ${icon}`} />
      </div>
      <span className="name">{name}</span>
    </div>
  );
};

export default SocialIcon;
