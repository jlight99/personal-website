import React, { Component } from 'react';
import Menu from './Menu';
import AboutMe from './sections/AboutMe';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Acknowledgements from './sections/Acknowledgements';

class LandingPage extends Component {
    render() {
        return (
            <span>
                <Menu />
                <div>
                    <AboutMe />
                    <Experience />
                    <Projects />
                    <Acknowledgements className="acknowledgements"/>
                </div>
            </span>
        )
    }
}

export default LandingPage