import 'font-awesome/css/font-awesome.min.css';
import * as React from 'react';
import { hydrate, render } from "react-dom";
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const rootElement: any = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

registerServiceWorker();
