import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';

import './ContactInfo.css';

library.add(fab, faFileDownload)

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-info">
        <div className="contact-item">
          <Tooltip title={<h1 style={{ fontSize: "1.5em" }}>Check out my GitHub!</h1>}>
            <a href="https://github.com/jlight99">
              <FontAwesomeIcon icon={['fab', 'github']} style={{ color: "6e5494" }} />
            </a>
          </Tooltip>
        </div>
        <div className="contact-item">
          <Tooltip title={<h1 style={{ fontSize: "1.5em" }}>Let's connect on LinkedIn!</h1>}>
            <a href="https://www.linkedin.com/in/ellenhuang/">
              <FontAwesomeIcon icon={['fab', 'linkedin']} style={{ color: "0077b5" }} />
            </a>
          </Tooltip>
        </div>
        <div className="contact-item">
          <Tooltip title={<h1 style={{ fontSize: "1.5em" }}>Follow me on Strava!</h1>}>
            <a href="https://www.strava.com/athletes/41936791">
              <FontAwesomeIcon icon={['fab', 'strava']} style={{ color: "fc4c02" }} />
            </a>
          </Tooltip>
        </div>
        <div className="contact-item">
          <Tooltip title={<h1 style={{ fontSize: "1.5em" }}>Check out my resume!</h1>}>
            <a href="/resources/resume.pdf" download>
              <FontAwesomeIcon icon='file-download' style={{ color: "black", maxWidth: 24 }} />
            </a>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default ContactInfo;