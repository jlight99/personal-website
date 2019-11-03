import React, { Component } from 'react';
import MenuSections from './MenuSections';
import AboutMe from './sections/AboutMe';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
        <span>
          <MenuSections class="header" />
          <div class="the-body">
            <AboutMe />
            <Experience />
            <Projects />
          </div>
        </span>
    );
  }
}

export default App;
