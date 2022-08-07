import React from 'react';

import '../Menu.css';
import './Thanks.css';

class ThanksPage extends React.Component {
    render() {
        return (
            <span className="thanks">
                <span className="menu-header">
                    <a href="/" class="section-header">Home</a>
                </span>

                <div className="thanks-title">Thanks to</div>
                <a href='https://www.freepik.com/vectors/internship'>Internship vector created by pikisuperstar - www.freepik.com</a>
                <a href='https://www.freepik.com/vectors/usability'>Usability vector created by freepik - www.freepik.com</a>
            </span>
        )
    }
}

export default ThanksPage
