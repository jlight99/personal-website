import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import ContactInfo from './ContactInfo';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const routing = (
  <Router>
    <div className="App-header">
      <Link to="/">hi, I'm Ellen!</Link>
    </div>
    <div>
      <ul>
        <li className="page">
          <Link to="/aboutme">about me</Link>
        </li>
        <li className="page">
          <Link to="/projects">projects</Link>
        </li>
        <li className="page">
          <Link to="/resume">resume</Link>
        </li>
        <li className="page">
          <Link to="/blog">blog</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/blog" component={Blog} />
    </div>
    <ContactInfo />
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
