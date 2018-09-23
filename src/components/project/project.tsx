import * as React from "react";

import "./project.css";

interface IProps {
  projectDetails: IProject;
}

export interface IProject {
  name: string;
  description: string;
  img: string;
  tagList: string[];
  url: {
    github: string;
    website: string;
  };
}

const handleProjectClick = (website: string) => {
  if (!website) {
    return;
  }

  window.open(website, "_blank");
};

const Project: React.StatelessComponent<IProps> = props => {
  const {
    projectDetails: {
      name,
      description,
      img,
      url: { website }
    }
  } = props;

  return (
    <div
      onClick={() => handleProjectClick(website)}
      className="project-container"
    >
      <div className="heading">
        <div className="fa fa-circle red" />
        <div className="fa fa-circle yellow" />
        <div className="fa fa-circle green" />
        <span>{name}</span>
      </div>
      <div className="body">
        <div className="overlay">
          <div className="description-container">{description}</div>
        </div>

        <img
          className="project-image"
          src={require(`../../assets/images/projects/${img}`)}
        />
      </div>
    </div>
  );
};

export default Project;
