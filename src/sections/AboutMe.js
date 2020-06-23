import React from 'react';
import ContactInfo from '../ContactInfo';

import './AboutMe.css';

class AboutMe extends React.Component {
    render() {
        return (
            <a id="about_me">
                <span className="about">
                    <span id="picture-of-me">
                        <img src="/resources/IMG_0272.JPG"></img>
                    </span>
                    <span className="about-section">
                        <div className="hi">hey, i'm ellen!</div>
                        <div className="about-text">
                            i study software engineering at the university of waterloo.
                            in my free time, i enjoy learning new languages, running, and playing music.
                        </div>
                        <span className="contact-info"><ContactInfo /></span>
                    </span>
                </span>
            </a>
        );
    }
}

export default AboutMe