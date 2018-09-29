import * as React from "react";

import "./skills.css";
import Skill from "../../components/skill/skill";

// Find a list of icons at: http://konpa.github.io/devicon/
const skillList = [
  { name: "HTML 5", icon: "html5" },
  { name: "CSS 3", icon: "css3" },
  { name: "Sass", icon: "sass" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JQuery", icon: "jquery" },
  { name: "React", icon: "react" },
  { name: "Angular 2+", icon: "angularjs" },
  { name: "Jasmine", icon: "jasmine" },
  { name: "Webpack", icon: "webpack" },
  { name: "Grunt", icon: "grunt" },
  { name: "Gulp", icon: "gulp" },
  { name: "Node", icon: "nodejs" },
  { name: "C#", icon: "csharp" },
  { name: "Java", icon: "java" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Git", icon: "git" },
  { name: "Nginx", icon: "nginx" },
  { name: "Visual Studio", icon: "visualstudio" }
];

const Skills: React.StatelessComponent = () => {
  return (
    <div className="section primary">
      <h2>Skills</h2>

      <div className="skills-container">
        {skillList.map((skill, i) => (
          <Skill key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
