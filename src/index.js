import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';

const routing = (
  <Router basename={process.env.PUBLIC_URL}>
    <App/>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
