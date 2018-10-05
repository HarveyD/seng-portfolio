import * as React from "react";

import "./skill.css";
import { SkillEnum } from "../../constants";

interface IProps {
  skill: SkillEnum;
  size: string;
}

export interface ISkill {
  name: string;
  icon: string;
  showAsDefault?: boolean;
}

export const skillMap: Map<SkillEnum, ISkill>  = new Map<SkillEnum, ISkill> ([
  [SkillEnum.html5, { name: 'HTML 5', icon: 'html5'}],
  [SkillEnum.css3, { name: 'CSS 3', icon: 'css3'}],
  [SkillEnum.sass, { name: 'Sass', icon: 'sass'}],
  [SkillEnum.js, { name: 'JavaScript', icon: 'javascript'}],
  [SkillEnum.ts, { name: "TypeScript", icon: "typescript" }],
  [SkillEnum.jquery, { name: "JQuery", icon: "jquery" }],
  [SkillEnum.react, { name: "React", icon: "react" }],
  [SkillEnum.redux, { name: "Redux", icon: "redux" }],
  [SkillEnum.angular2, { name: "Angular 2+", icon: "angularjs" }],
  [SkillEnum.jasmine, { name: "Jasmine", icon: "jasmine" }],
  [SkillEnum.webpack, { name: "Webpack", icon: "webpack" }],
  [SkillEnum.grunt, { name: "Grunt", icon: "grunt" }],
  [SkillEnum.gulp, { name: "Gulp", icon: "gulp" }],
  [SkillEnum.node, { name: "Node", icon: "nodejs" }],
  [SkillEnum.csharp, { name: "C#", icon: "csharp" }],
  [SkillEnum.java, { name: "Java", icon: "java" }],
  [SkillEnum.mongodb, { name: "MongoDB", icon: "mongodb" }],
  [SkillEnum.postgresql, { name: "PostgreSQL", icon: "postgresql" }],
  [SkillEnum.git, { name: "Git", icon: "git" }],
  [SkillEnum.nginx, { name: "Nginx", icon: "nginx" }],
  [SkillEnum.vs, { name: "Visual Studio", icon: "visualstudio" }],
  [SkillEnum.android, { name: "Android", icon: "android", showAsDefault: false }],
  [SkillEnum.ionic, { name: "Ionic", icon: "ionic", showAsDefault: false }],
  [SkillEnum.websockets, { name: "Websockets", icon: "websocket", showAsDefault: false }],
  [SkillEnum.panelleum, { name: "Panelleum", icon: "panelleum", showAsDefault: false }],
  [SkillEnum.processing, { name: "Processing", icon: "processing", showAsDefault: false }],
]);

const Skill: React.StatelessComponent<IProps> = props => {
  const { skill, size } = props; 

  const skillDetails = skillMap.get(skill);

  if (!skillDetails) {
    return null;
  }

  return (
    <div className={`skill-container ${size}`}>
      <i className={`icon devicon-${skillDetails.icon}-plain`} />
      <span className="name">{skillDetails.name}</span>
    </div>
  );
};

export default Skill;
