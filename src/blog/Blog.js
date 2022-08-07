import React from 'react';
import BlogHome from './BlogHome';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './Blog.css';

class Blog extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/blog" component={BlogHome} />
                </div>
            </Router>
        )
    }
}

export default Blog