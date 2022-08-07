import React from 'react';
import ThanksPage from './ThanksPage';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './Thanks.css';

class Thanks extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/thanks" component={ThanksPage} />
                </div>
            </Router>
        )
    }
}

export default Thanks