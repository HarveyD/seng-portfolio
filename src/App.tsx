import * as React from 'react';
import './App.css';

import Landing from './sections/landing/landing';
import About from './sections/about/about';
import Experience from './sections/experience/experience';
import Education from './sections/education/education';

class App extends React.Component {
  public render() {
    return (
      <div className="app-container">
        <Landing />
        <About />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default App;
