import * as React from 'react';
import './App.css';

import Landing from './sections/landing/landing';
import About from './sections/about/about';

class App extends React.Component {
  public render() {
    return (
      <div className="app-container">
        <Landing />
        <About />
      </div>
    );
  }
}

export default App;
