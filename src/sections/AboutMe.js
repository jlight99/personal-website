import React from 'react';
import ContactInfo from '../ContactInfo';

import './AboutMe.css';

class AboutMe extends React.Component {
    render() {
        return (
            <a id="about_me">
            <span class="about">
                <div class="hi">hey, i'm ellen!</div>
                <div class="about-text">
                    i study software engineering at the university of waterloo.
                    i am experienced in backend and full-stack web development.
                    aside from programming, my interests include long distance running, playing violin, and writing.
                    audiobooks are my guilty pleasure!
                </div>
                <ContactInfo />
            </span>
            </a>
        )
    }
}

export default AboutMe