import * as React from "react";

import "./projects.css";
import Project, { IProject } from "../../components/project/project";
import ProjectModal from "../../components/project-modal/project-modal";
import { SkillEnum } from "../../constants";

interface IState {
  selectedProject?: IProject;
}

const projectList: IProject[] = [
  {
    id: 0,
    name: "Crypto Coaster",
    description:{
      overview: "A simple web app that provides real time updates to cryptocurrency prices using their respective mascots.",
      detailed: "A simple web app that provides real time updates to cryptocurrency prices using their respective mascots.A simple web app that provides real time updates to cryptocurrency prices using their respective mascots."
    },
    img: "crypto-coaster.jpg",
    tagList: [SkillEnum.js, SkillEnum.websockets, SkillEnum.jquery],
    url: {
      github: "https://github.com/HarveyD/crypto-coaster",
      website: "https://www.harveydelaney.com/crypto-coaster/"
    }
  },
  {
    id: 1,
    name: "Reddit Sentiment Analyser",
    description: {
      overview: "Allows users to easily and quickly get a summary of the overall positive and negative sentiment of a comment thread.",
      detailed: "Allows users to easily and quickly get a summary of the overall positive and negative sentiment of a comment thread Allows users to easily and quickly get a summary of the overall positive and negative sentiment of a comment thread.",
    },
    img: "reddit-sa.jpg",
    tagList: [SkillEnum.js, SkillEnum.sass, SkillEnum.jquery, SkillEnum.node],
    url: {
      github: "https://github.com/HarveyD/reddit-sa",
      website: "https://www.harveydelaney.com/reddit-sa/"
    }
  },
  {
    id: 2,
    name: "Compounding Savings",
    description: {
      overview: "A web application aimed at informing the potential compounding interest benefits from not buying non-essential items.",
      detailed: "A web application aimed at informing the potential compounding interest benefits from not buying non-essential items. A web application aimed at informing the potential compounding interest benefits from not buying non-essential items."
    },
    img: "compounding-savings.jpg",
    tagList: [SkillEnum.react, SkillEnum.redux, SkillEnum.sass, SkillEnum.webpack],
    url: {
      github: "https://github.com/HarveyD/compounding-savings/",
      website: "https://www.harveydelaney.com/compounding-savings"
    }
  },
  {
    id: 3,
    name: "PooPlot",
    description: {
      overview: "A hybrid mobile application to help people track, view and share poops.",
      detailed: "A hybrid mobile application to help people track, view and share poops. A hybrid mobile application to help people track, view and share poops."
    },
    img: "pooplot.jpg",
    tagList: [SkillEnum.angular2, SkillEnum.ionic, SkillEnum.android, SkillEnum.node, SkillEnum.mongodb],
    url: {
      github: "",
      website: "https://www.harveydelaney.com/pooplot"
    }
  },
  {
    id: 4,
    name: "Bruce Hall VR",
    description: {
      overview: "A simple tour of the old Bruce Hall before being knocked down. PROJECT NOT LIVE.",
      detailed: "A simple tour of the old Bruce Hall before being knocked down. PROJECT NOT LIVE. A simple tour of the old Bruce Hall before being knocked down. PROJECT NOT LIVE."
    }, 
    img: "bruce-hall-vr.jpg",
    tagList: [SkillEnum.js, SkillEnum.jquery, SkillEnum.panelleum],
    url: {
      github: "https://github.com/HarveyD/bruce-hall-vr",
      website: "https://www.harveydelaney.com/bruce-hall-vr"
    }
  },
  {
    id: 5,
    name: "Bruce Hall VR 2",
    description: {
      overview: "A rebuild of the Bruce Hall VR project written in React. NOT LIVE.",
      detailed: "A rebuild of the Bruce Hall VR project written in React. NOT LIVE. A rebuild of the Bruce Hall VR project written in React. NOT LIVE."
    },
    img: "bruce-hall-vr-2.jpg",
    tagList: [SkillEnum.react, SkillEnum.panelleum],
    url: {
      github: "https://github.com/HarveyD/bruce-hall-vr-2",
      website: ""
    }
  },
  {
    id: 6,
    name: "Repeat After Me",
    description: {
      overview: "A simple Simon Says clone made using HTML5 Canvas + Typescript.",
      detailed: "A simple Simon Says clone made using HTML5 Canvas + Typescript. A simple Simon Says clone made using HTML5 Canvas + Typescript.",
    },
    img: "repeat-after-me.jpg",
    tagList: [SkillEnum.js, SkillEnum.ts, SkillEnum.webpack, SkillEnum.html5],
    url: {
      github: "https://github.com/HarveyD/repeatafterme",
      website: "https://www.harveydelaney.com/repeatafterme/"
    }
  },
  {
    id: 7,
    name: "SpookEm",
    description: {
      overview: "A tile based horror/survival game made using Processing/Java. (Demo not available).",
      detailed: "A tile based horror/survival game made using Processing/Java. (Demo not available). A tile based horror/survival game made using Processing/Java. (Demo not available)."
    },
    img: "spookem.jpg",
    tagList: [SkillEnum.java, SkillEnum.processing],
    url: {
      github: "",
      website: ""
    }
  }
];

class Projects extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = { selectedProject: undefined };
  }

  public handleProjectClick = (projectId: number) => {
    this.setState({
      selectedProject: projectList.find(x => x.id === projectId)
    });
  };

  public handleModalExit = () => {
    this.setState({ selectedProject: undefined });
  };

  public render() {
    const { selectedProject } = this.state;

    return (
      <div className="section section-secondary">
        <h2>Projects</h2>

        <div className="projects-container">
          {projectList.map(project => (
            <Project
              key={project.id}
              projectDetails={project}
              projectClick={this.handleProjectClick}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            modalExitEvent={this.handleModalExit}
          />
        )}
      </div>
    );
  }
}

export default Projects;
