import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes';
import './helpers/styles/styles.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';


const app = (
  <Router>
  	<App />
  </Router>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();

