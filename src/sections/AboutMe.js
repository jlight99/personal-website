import React from 'react';
import ContactInfo from '../ContactInfo';

import './AboutMe.css';

class AboutMe extends React.Component {
    render() {
        return (
            <a id="about_me">
            <span className="about">
                <span className="about-section">
                <div className="hi">hey, i'm ellen!</div>
                <div className="about-text">
                    <div>i study software engineering at the university of waterloo. in my spare time, i like to play around with new technologies and build random stuff.</div>
                    <br></br>
                    <div>aside from programming, i also enjoy playing violin, writing, and long distance running.</div>
                    <div>audiobooks are my guilty pleasure!</div>
                </div>
                </span>
                <ContactInfo />
            </span>
            </a>
        )
    }
}

export default AboutMe