import * as React from "react";

import "./skill.css";

interface IProps {
  skill: ISkill;
}

export interface ISkill {
  name: string;
  icon: string;
}

const Skill: React.StatelessComponent<IProps> = props => {
  const {
    skill: {
      name,
      icon,
    }
  } = props;

  return (<div className="skill-container">
    <i className={`icon devicon-${icon}-plain`} />
    <span className="name">{name}</span>
  </div>);
};

export default Skill;
