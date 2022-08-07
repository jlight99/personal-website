import React, { Component } from 'react';
import Menu from './Menu';
import AboutMe from './sections/AboutMe';
import Acknowledgements from './sections/Acknowledgements';
import Activities from './sections/Activities';
import Experience from './sections/Experience';
import Music from './sections/Music';
import Projects from './sections/Projects';

class LandingPage extends Component {
    render() {
        return (
            <span>
                <Menu />
                <div>
                    <AboutMe />
                    <Experience />
                    <Projects />
                    <Activities />
                    <Music />
                    <Acknowledgements className="acknowledgements"/>
                </div>
            </span>
        )
    }
}

export default LandingPage