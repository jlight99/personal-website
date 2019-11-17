import React from 'react';
import BlogHome from './BlogHome';
import ParisTrip from './posts/ParisTrip';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './Blog.css';

class Blog extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/blog" component={BlogHome} />
                    <Route path="/blog/paris-trip" component={ParisTrip} />
                </div>
            </Router>
        )
    }
}

export default Blog