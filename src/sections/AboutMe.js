import React from 'react';
import ContactInfo from '../ContactInfo';

import './AboutMe.css';

class AboutMe extends React.Component {
    render() {
        return (
            <a id="about_me">
                <span className="about">
                    <span className="about-inner">
                        <span id="picture-of-me">
                            <img src="/resources/profilepic.JPG"></img>
                        </span>
                        <span className="about-section">
                            <div className="hi">Hi, I'm Ellen!</div>
                            <div className="about-text">
                                I recently graduated with a Bachelor's of Software Engineering from the University of Waterloo.
                                Things that make me happy include food, languages, running, music, and travelling.
                        </div>
                            <span className="contact-info"><ContactInfo /></span>
                        </span>
                    </span>
                </span>
            </a>
        );
    }
}

export default AboutMe