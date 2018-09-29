import * as React from "react";

import "./projects.css";
import Project, { IProject } from "../../components/project/project";

const projectList: IProject[] = [
  {
    name: "Crypto Coaster",
    description:
      "A simple web app that provides real time updates to cryptocurrency prices using their respective mascots.",
    img: "crypto-coaster.jpg",
    tagList: ["JavaScript", "Web Sockets", "JQuery"],
    url: {
      github: 'https://github.com/HarveyD/crypto-coaster',
      website: 'https://www.harveydelaney.com/crypto-coaster/'
    }
  },
  {
    name: "Reddit Sentitment Analyser",
    description:
      "Allows users to easily and quickly get a summary of the overall positive and negative sentiment of a comment thread.",
    img: "reddit-sa.jpg",
    tagList: ["JavaScript", "Sass", "JQuery", "Browserify", "NodeJS"],
    url: {
      github: 'https://github.com/HarveyD/reddit-sa',
      website: 'https://www.harveydelaney.com/reddit-sa/'
    }
  },
  {
    name: "Compounding Savings",
    description:
      "A web application aimed at informing the potential compounding interest benefits from not buying non-essential items.",
    img: "compounding-savings.jpg",
    tagList: ["React", "Redux", "Sass", "Webpack"],
    url: {
      github: 'https://github.com/HarveyD/compounding-savings/',
      website: 'https://www.harveydelaney.com/compounding-savings'
    }
  },
  {
    name: "PooPlot",
    description:
      "A hybrid mobile application to help people track, view and share poops.",
    img: "pooplot.jpg",
    tagList: ["Angular 4", "Ionic", "Android", "NodeJS", "MongoDB"],
    url: {
      github: '',
      website: 'https://www.harveydelaney.com/pooplot'
    }
  },
  {
    name: "Bruce Hall VR",
    description:
      "A simple tour of the old Bruce Hall before being knocked down. PROJECT NOT LIVE.",
    img: "bruce-hall-vr.jpg",
    tagList: ["JavaScript", "JQuery", "Panelleum"],
    url: {
      github: 'https://github.com/HarveyD/bruce-hall-vr',
      website: 'https://www.harveydelaney.com/bruce-hall-vr'
    }
  },
  {
    name: "Bruce Hall VR 2",
    description:
      "A rebuild of the Bruce Hall VR project written in React. NOT LIVE.",
    img: "bruce-hall-vr-2.jpg",
    tagList: ["React", "Panelleum"],
    url: {
      github: 'https://github.com/HarveyD/bruce-hall-vr-2',
      website: ''
    }
  },
  {
    name: "Repeat After Me",
    description:
      "A simple Simon Says clone made using HTML5 Canvas + Typescript.",
    img: "repeat-after-me.jpg",
    tagList: ["JavaScript", "TypeScript", "Webpack", "HTML5 Canvas"],
    url: {
      github: 'https://github.com/HarveyD/repeatafterme',
      website: 'https://www.harveydelaney.com/repeatafterme/'
    }
  },
  {
    name: "SpookEm",
    description:
      "A tile based horror/survival game made using Processing/Java. (Demo not available).",
    img: "spookem.jpg",
    tagList: ["Java", "Processing", "Path finding algorithms"],
    url: {
      github: '',
      website: ''
    }
  }  
];

const Projects: React.StatelessComponent = () => {
  return (
    <div className="section section-secondary">
      <h2>Projects</h2>

      <div className="projects-container">
        {projectList.map((project, i) => (
          <Project key={i} projectDetails={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
