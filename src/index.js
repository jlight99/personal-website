import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuSections from './MenuSections';
import AboutMe from './sections/AboutMe';
import Experience from './sections/Experience';

const routing = (
  <span>
    <MenuSections class="header" />
    <div class="the-body">
      <AboutMe />
      <Experience />
    </div>
  </span>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
