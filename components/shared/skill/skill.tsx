import * as React from "react";

import "./skill.scss";
import { SkillEnum } from "../../../constants";

interface IProps {
  skill: SkillEnum;
  size: string;
}

export interface ISkill {
  name: string;
  icon: string;
  showAsDefault?: boolean;
  faIcon?: string;
}

export const skillMap: Map<SkillEnum, ISkill>  = new Map<SkillEnum, ISkill> ([
  [SkillEnum.html5, { name: 'HTML 5', icon: 'html5'}],
  [SkillEnum.css3, { name: 'CSS 3', icon: 'css3'}],
  [SkillEnum.sass, { name: 'Sass', icon: 'sass'}],
  [SkillEnum.js, { name: 'JavaScript', icon: 'javascript'}],
  [SkillEnum.ts, { name: "TypeScript", icon: "typescript" }],
  [SkillEnum.jquery, { name: "JQuery", icon: "jquery" }],
  [SkillEnum.react, { name: "React", icon: "react" }],
  [SkillEnum.redux, { name: "Redux", icon: "", faIcon: "code" }],
  [SkillEnum.angular2, { name: "Angular 2+", icon: "angularjs" }],
  [SkillEnum.jasmine, { name: "Jasmine", icon: "jasmine" }],
  [SkillEnum.webpack, { name: "Webpack", icon: "webpack" }],
  [SkillEnum.grunt, { name: "Grunt", icon: "grunt" }],
  [SkillEnum.gulp, { name: "Gulp", icon: "gulp" }],
  [SkillEnum.node, { name: "Node", icon: "nodejs" }],
  [SkillEnum.csharp, { name: "C#", icon: "csharp" }],
  [SkillEnum.java, { name: "Java", icon: "java" }],
  [SkillEnum.mongodb, { name: "Mongo DB", icon: "mongodb" }],
  [SkillEnum.postgresql, { name: "PostgreSQL", icon: "postgresql" }],
  [SkillEnum.git, { name: "Git", icon: "git" }],
  [SkillEnum.nginx, { name: "Nginx", icon: "nginx" }],
  [SkillEnum.vs, { name: "Visual Studio", icon: "visualstudio" }],
  [SkillEnum.android, { name: "Android", icon: "android", showAsDefault: false }],
  [SkillEnum.ionic, { name: "Ionic", icon: "", faIcon: "code", showAsDefault: false }],
  [SkillEnum.websockets, { name: "Websockets", icon: "", faIcon: "plug", showAsDefault: false }],
  [SkillEnum.panelleum, { name: "Panelleum", icon: "", faIcon: "columns", showAsDefault: false }],
  [SkillEnum.processing, { name: "Processing", icon: "", faIcon: "code", showAsDefault: false }],
]);

const Skill: React.StatelessComponent<IProps> = props => {
  const { skill, size } = props; 

  const skillDetails = skillMap.get(skill);

  if (!skillDetails) {
    return null;
  }

  const { name, icon, faIcon } = skillDetails;

  return (
    <div className={`skill-container ${size}`}>
      <i className={'icon ' + (faIcon ? `fas fa-${faIcon}` : `devicon-${icon}-plain`)} />
      <span className="name">{name}</span>
    </div>
  );
};

export default Skill;
