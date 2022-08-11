import React from 'react';

import './Activities.css';

class Activities extends React.Component {
    render() {
        return (
            <span id="activities">
                <div className="activities-header">Runs</div>

                <div className="activities-intro">
                    I love starting the day with a run in the morning, preferably when the weather is cool and crisp.
                    There is a beautiful serenity to exploring the neighbourhood while breathing fresh air,
                    with my favourite music playing in my ears.
                </div>

                <div id='wrap-summary'>
                    <iframe id='scaled-frame' height='405' width='590' frameBorder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/41936791/activity-summary/3ccac5e7451e60b2a6b2a1b3538ffaabb2652539'></iframe>
                </div>
                <div id='wrap-latest'>
                    <iframe id='scaled-frame' height='454' width='300' frameBorder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/41936791/latest-rides/3ccac5e7451e60b2a6b2a1b3538ffaabb2652539'></iframe>
                </div>
            </span>
        )
    }
}

export default Activities