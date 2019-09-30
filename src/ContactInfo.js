import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab)

class ContactInfo extends Component {
    render() {
      return (
        <div className="contact-info">
          <div className="contact-item">
            <a href="https://github.com/jlight99">
              <FontAwesomeIcon icon={['fab', 'github']} style={{ color: "6e5494" }} />
            </a>
          </div>
          <div className="contact-item">
            <a href="https://www.linkedin.com/in/ellenhuang/">
              <FontAwesomeIcon icon={['fab', 'linkedin']} style={{ color: "0077b5" }} />
            </a>
          </div>
          <div className="contact-item">
            <a href="https://www.strava.com/athletes/41936791" target="_blank">
              <FontAwesomeIcon icon={['fab', 'strava']} style={{ color: "fc4c02" }} />
            </a>
          </div>
        </div>
      );
    }
  }

  export default ContactInfo;
