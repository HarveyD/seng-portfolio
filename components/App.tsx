import * as React from "react";
import "./App.scss";

import Landing from "./sections/landing/landing";
import About from "./sections/about/about";
import Experience from "./sections/experience/experience";
import Education from "./sections/education/education";
import Projects from "./sections/projects/projects";
import Skills from "./sections/skills/skills";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";
import PortfolioDataService from "../services/portfolio-data.service";

class App extends React.Component {
  public render() {
    return (
      <div className="app-container">
        <Landing userDetails={PortfolioDataService.userDetails} />
        <About aboutTextList={PortfolioDataService.aboutTextList} />
        <Experience experienceList={PortfolioDataService.experienceList} />
        <Education educationList={PortfolioDataService.educationList} />
        <Projects projectList={PortfolioDataService.projectList} />
        <Skills skillList={PortfolioDataService.skillList} />
        <Contact socialIconList={PortfolioDataService.socialIconList} />
        <Footer />
      </div>
    );
  }
}

export default App;
