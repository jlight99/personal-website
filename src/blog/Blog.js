import React from 'react';
import BlogHome from './BlogHome';
import ParisTrip from './posts/ParisTrip';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './Blog.css';
import DeploymentStruggles from './posts/DeploymentStruggles';

class Blog extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/blog" component={BlogHome} />
                    <Route path="/blog/paris-trip" component={ParisTrip} />
                    <Route path="/blog/deployment-struggles" component={DeploymentStruggles} />
                </div>
            </Router>
        )
    }
}

export default Blog