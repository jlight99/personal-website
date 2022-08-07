import React from 'react';

import './Activities.css';

class Activities extends React.Component {
    render() {
        return (
            <a id="activities">
                <div className="activities-header">Activities</div>
                <div id='wrap-summary'>
                    <iframe id='scaled-frame' height='405' width='590' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/41936791/activity-summary/3ccac5e7451e60b2a6b2a1b3538ffaabb2652539'></iframe>
                </div>
                <div id='wrap-latest'>
                    <iframe id='scaled-frame' height='454' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/41936791/latest-rides/3ccac5e7451e60b2a6b2a1b3538ffaabb2652539'></iframe>
                </div>
            </a>
        )
    }
}

export default Activities