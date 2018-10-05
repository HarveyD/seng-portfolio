import * as React from "react";

import "./project-modal.css";
import { IProject } from "../project/project";
import Skill from "../skill/skill";
import { SkillEnum } from "../../constants";

interface IProps {
  project: IProject;
  modalExitEvent: () => void;
}

const contentClickEvent = (e: any) => {
  e.stopPropagation();
};

const renderTechnologies = (skillList: SkillEnum[]) =>
  skillList.map((skill, i) => <Skill key={i} skill={skill} size="small" />);

const renderButtons = (url: any) => (
  <div className="button-links">
    <button onClick={() => window.open(url.github)} className="link-button button-github">
      Github
      <i className="fa fa-github" />
    </button>
    <button onClick={() => window.open(url.website)} className="link-button button-website">
      Website
      <i className="fa fa-link" />
    </button>
  </div>
);

const ProjectModal: React.StatelessComponent<IProps> = props => {
  const {
    project: {
      img,
      name,
      description: { detailed },
      tagList,
      url
    },
    modalExitEvent
  } = props;

  return (
    <div className="project-modal-container" onClick={modalExitEvent}>
      <div className="modal-content-container" onClick={contentClickEvent}>
        <img
          className="project-image"
          src={require(`../../assets/images/projects/${img}`)}
        />

        <div className="modal-body-container">
          <div className="header-container">
            <h2 className="modal-heading">{name}</h2>
            <i className="fa fa-times close-icon" onClick={modalExitEvent} />
          </div>

          <p className="created-date">12th September 2018</p>
          <p>{detailed}</p>

          <div className="skills-container">{renderTechnologies(tagList)}</div>

          {renderButtons(url)}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
