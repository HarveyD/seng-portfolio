import * as React from "react";

import "./project-modal.scss";
import { IProject, IUrl } from "../project/project";
import Skill from "../skill/skill";
import { SkillEnum } from "../../../constants";

interface IProps {
  project: IProject;
  modalExitEvent: () => void;
}

const contentClickEvent = (e: any) => {
  e.stopPropagation();
};

const renderTechnologies = (skillList: SkillEnum[]) =>
  skillList.map((skill, i) => <Skill key={i} skill={skill} size="small" />);

const renderButtons = (url: IUrl) => (
  <div className="button-links">
    {url.github && (
      <a href={url.github}
        className="link-button button-github"
      >
        Github
        <i className="fab fa-github" />
      </a>
    )}
    {url.website && (
      <a href={url.website}
        className="link-button button-website"
      >
        Website
        <i className="fa fa-link" />
      </a>
    )}
  </div>
);

class ProjectModal extends React.Component<IProps> {
  public componentDidMount() {
    document.body.classList.add("disable-scroll");
    document.documentElement.classList.add("disable-scroll");
  }

  public componentWillUnmount() {
    document.body.classList.remove("disable-scroll");
    document.documentElement.classList.remove("disable-scroll");
  }

  public render() {
    const {
      project: {
        img,
        name,
        description: { detailed },
        tagList,
        url,
        releaseDate
      },
      modalExitEvent
    } = this.props;

    return (
      <div className="project-modal-container" onClick={modalExitEvent}>
        <div className="modal-content-container" onClick={contentClickEvent}>
          <div className="image-container">
            <img
              className="project-image"
              src={`/static/images/projects/${img}`}
            />
          </div>

          <div className="modal-body-container">
            <div className="header-container">
              <div className="primary">
                <h2 className="modal-heading">{name}</h2>
                <i
                  className="fa fa-times close-icon"
                  onClick={modalExitEvent}
                />
              </div>

              <div className="secondary">
                <p className="released-date">{releaseDate}</p>
              </div>
            </div>

            <div className="content-container">
              <p>{detailed}</p>

              <div className="technologies-container">
                {renderTechnologies(tagList)}
              </div>
            </div>

            <div className="footer-container">{renderButtons(url)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectModal;
