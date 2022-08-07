import React from 'react';

import './Music.css';
import MusicItem from './MusicItem';

class Music extends React.Component {
    render() {
        return (
            <a id="music">
                <div className="music-header">Music</div>

                <div className="music-intro">
                    Music has been a source of joy for me since I was a kid. My violin has been my companion for over a decade.
                    Karaoke parties are my favourite kind of parties. Recently, I've had fun making covers of pop songs, and thought
                    I'd share a few here.
                </div>

                <MusicItem
                    musicName="Perfect (cover)"
                    musicPath="resources/music/perfect.m4a"
                />

                <br/><br/><br/>

                <MusicItem
                    musicName="Dear Theodosia (cover)"
                    musicPath="resources/music/dear-theodosia.m4a"
                />

                <br/><br/><br/>

                <MusicItem
                    musicName="I want it that way (cover)"
                    musicPath="resources/music/i-want-it-that-way.m4a"
                />

                <br/><br/><br/>

                <MusicItem
                    musicName="Sound of Silence (cover)"
                    musicPath="resources/music/sound-of-silence.m4a"
                />

                <br/><br/><br/>

                <MusicItem
                    musicName="All of Me (cover)"
                    musicPath="resources/music/all-of-me.m4a"
                />

            </a>
        )
    }
}

export default Music