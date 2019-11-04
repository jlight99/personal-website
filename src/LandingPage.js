import React, { Component } from 'react';
import MenuSections from './MenuSections';
import AboutMe from './sections/AboutMe';
import Experience from './sections/Experience';
import Projects from './sections/Projects';

class LandingPage extends Component {
    render() {
        return (
            <span>
                <MenuSections />
                <div>
                    <AboutMe />
                    <Experience />
                    <Projects />
                </div>
            </span>
        )
    }
}

export default LandingPage