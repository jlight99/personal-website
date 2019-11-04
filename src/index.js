import React from 'react';
import App from './App';
import Blog from './Blog';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
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
