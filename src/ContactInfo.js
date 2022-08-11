import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';

import './ContactInfo.css';

library.add(fab)

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-info">
        <div className="contact-item">
          <Tooltip title={<h1 style={{ fontSize: "1.5em" }}>Let's connect on LinkedIn!</h1>}>
            <a href="https://www.linkedin.com/in/ellenhuang/">
              <FontAwesomeIcon icon={['fab', 'linkedin']} style={{ color: "0077b5" }} />
            </a>
          </Tooltip>
        </div>
        <div className="contact-item">
          <Tooltip title={<h1 style={{ fontSize: "1.5em" }}>Check out my GitHub!</h1>}>
            <a href="https://github.com/jlight99">
              <FontAwesomeIcon icon={['fab', 'github']} style={{ color: "6e5494" }} />
            </a>
          </Tooltip>
        </div>
        <div className="contact-item">
          <Tooltip title={<h1 style={{ fontSize: "1.5em" }}>Follow me on Goodreads!</h1>}>
            <a href="https://www.goodreads.com/ellenhuang">
              <FontAwesomeIcon icon={['fab', 'goodreads']} style={{ color: "75420E" }} />
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
      </div>
    );
  }
}

export default ContactInfo;