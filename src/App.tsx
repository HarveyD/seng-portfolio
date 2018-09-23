import * as React from 'react';
import './App.css';

import Landing from './sections/landing/landing';
import About from './sections/about/about';
import Experience from './sections/experience/experience';
import Education from './sections/education/education';
import Projects from './sections/projects/projects';
import Skills from './sections/skills/skills';

class App extends React.Component {
  public render() {
    return (
      <div className="app-container">
        <Landing />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </div>
    );
  }
}

export default App;
