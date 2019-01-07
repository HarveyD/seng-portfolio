import * as React from "react";

import "./project.scss";
import { SkillEnum } from "../../../constants";

interface IProps {
  projectDetails: IProject;
  projectClick: (projectId: number) => void;
}

export interface IUrl {
  github?: string;
  website?: string;
}

export interface IProject {
  id: number;
  name: string;
  description: {
    overview: string;
    detailed: string;
  };
  img: string;
  tagList: SkillEnum[];
  url: IUrl;
  releaseDate: string;
}

const Project: React.StatelessComponent<IProps> = props => {
  const {
    projectDetails: {
      id,
      name,
      description: { overview },
      img
    },
    projectClick
  } = props;

  return (
    <div
      onClick={() => projectClick(id)}
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
          <div className="description-container">{overview}</div>
        </div>

        <img
          className="project-image"
          src={`/static/images/projects/${img}`}
        />
      </div>
    </div>
  );
};

export default Project;
