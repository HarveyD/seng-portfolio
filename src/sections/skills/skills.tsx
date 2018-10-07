import * as React from "react";

import "./skills.css";

import Skill, { skillMap } from "../../components/skill/skill";

const getAllSkills = Array
  .from(skillMap.entries())
  .filter(([key, value]) => value.showAsDefault !== false)
  .map(([key, value]) => key);

const Skills: React.StatelessComponent = () => {
  return (
    <div className="section section-primary">
      <h2>Skills</h2>

      <div className="skills-container">
        {getAllSkills.map((skill, i) => (
          <Skill key={i} skill={skill} size="large" />
        ))}
      </div>
    </div>
  );
};

export default Skills;
