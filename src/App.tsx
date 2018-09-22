import * as React from 'react';
import './App.css';

import Landing from './sections/landing/landing';

class App extends React.Component {
  public render() {
    return (
      <div className="app-container">
        <Landing/>
      </div>
    );
  }
}

export default App;
