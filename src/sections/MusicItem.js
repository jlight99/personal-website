import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

import './Music.css';

class MusicItem extends React.Component {
    render() {
        return (
            <span className="music-item">
                <div className="music-name"><FontAwesomeIcon icon={faMusic} style={{ paddingRight: "7px", color: "rgb(93, 63, 211)" }}/>{this.props.musicName}</div>
                <audio ref="audio_tag" src={this.props.musicPath} controls/>
            </span>
        )
    }
}

export default MusicItem