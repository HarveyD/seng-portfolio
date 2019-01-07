import * as React from "react";

import "./skills.scss";

import Skill from "../../shared/skill/skill";
import { SkillEnum } from "../../../constants";

interface IProps {
  skillList: SkillEnum[];
}

const Skills: React.StatelessComponent<IProps> = ({skillList}) => {
  return (
    <section className="section section-primary">
      <h2>Skills</h2>

      <div className="skills-container">
        {skillList.map((skill, i) => (
          <Skill key={i} skill={skill} size="large" />
        ))}
      </div>
    </section>
  );
};

export default Skills;
