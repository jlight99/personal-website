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
                    <div>
                        i study software engineering at the university of waterloo
                        <br></br>
                        in my free time, i enjoy writing, running, and playing violin</div>
                </div>
                </span>
                <ContactInfo />
            </span>
            </a>
        )
    }
}

export default AboutMe